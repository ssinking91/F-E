import styled from "styled-components";

function Pagination({ total, pagesSum, page, setPage }) {
  const numPages = Math.ceil(total / pagesSum);

  if (numPages > 1) {
    return (
      <>
        <Nav>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </Button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </Button>
            ))}
          <Button
            onClick={() => setPage(page + 1)}
            disabled={page === numPages}
          >
            &gt;
          </Button>
        </Nav>
      </>
    );
  } else {
    return null;
  }
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin: 16px;
  width: 600px;
  padding-bottom: 50px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #999;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #20d7ff;
    cursor: pointer;
    transform: translateY(-4px);
  }

  &[disabled] {
    background: #ccc;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #20d7ff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;

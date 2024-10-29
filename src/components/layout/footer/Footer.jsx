import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();
  const location = useLocation();

    const handleRoute = () => {
        navigate(`/home2`);
      }

    return (
        <>
            <section>
                <div class="shadow-lg">
                    <div class="custm-card-footer">
                        <button type="button" class="btn btn-warning custBtn" onClick={handleRoute}>Next</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
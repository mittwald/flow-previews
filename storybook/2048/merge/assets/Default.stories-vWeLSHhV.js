import{j as r}from"./iframe-BdvCKsbF.js";import{A as e}from"./ActionGroup-8hqY-sJD.js";import{B as t}from"./Button-CEcdxUV1.js";import{A as u,s as q}from"./Action-CY3HJwZy.js";import{S as J}from"./Switch-8-U5PjWP.js";import{L as K}from"./Link-CYuL7qHB.js";import{u as N,F as P}from"./Form-C_oFPc-t.js";import"./index-Cun1SEai.js";import"./dynamic-a4vM_yKz.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./clsx-B-dksMZM.js";import"./index-nNeao2-W.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./useStatic-PYikJUKS.js";import"./IconWarning-P52nLd_s.js";import"./Text-JqEaJ00k.js";import"./browser-1fV_VPE3.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./Text-C3C-Y4LW.js";import"./utils-BbupUKpI.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./context-CCm7d4ti.js";import"./useMakeFocusable-BRRRy5hj.js";import"./useToggleState-Dwl8BZhq.js";import"./useFormReset-DGsTBoXq.js";import"./useControlledState-DFl6XB3S.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./FieldError-CdPfgsKF.js";import"./FieldError-CxS3H1fm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const Mr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>q(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(J,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(K,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const z=N();return r.jsx(P,{form:z,onSubmit:async()=>await q(2e3),children:r.jsx(e,{...o,children:r.jsx(t,{color:"accent",type:"submit",children:"Login"})})})}};var h,A,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(A=n.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var x,j,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button color="danger">Delete project</Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var B,S,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,g,G;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(G=(g=c.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};var w,F,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save as new
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(L=(F=i.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var W,k,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,O,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var H,I,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var V,_,C;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <ActionGroup {...props}>
          <Button color="accent" type="submit">
            Login
          </Button>
        </ActionGroup>
      </Form>;
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const Vr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,i as WithExtraSecondaryAction,m as WithLink,l as WithReactHookForm,c as WithSecondaryAction,d as WithSwitch,Vr as __namedExportsOrder,Mr as default};

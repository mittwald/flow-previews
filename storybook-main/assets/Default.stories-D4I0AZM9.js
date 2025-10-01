import{j as r}from"./iframe-D2Anwmct.js";import{A as e}from"./ActionGroup-DwbiqJMg.js";import{B as t}from"./Button-DzBCXdJ8.js";import{A as u,s as q}from"./Action-TQJO2mvI.js";import{S as J}from"./Switch-DRIHkV-C.js";import{L as K}from"./Link-B6JgnFIM.js";import{u as N,F as P}from"./Form-NvgoK1At.js";import"./index-Cun1SEai.js";import"./dynamic-Cfahilqg.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./clsx-B-dksMZM.js";import"./index-Ch7RQrKi.js";import"./getActionGroupSlot-CMiTVAum.js";import"./useStatic-CHoU06Vl.js";import"./IconWarning-DnpABaws.js";import"./Text-DtdPLjLU.js";import"./browser-CPuaporN.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./Text-lRP8kqf1.js";import"./utils-BpjcCBEz.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./context-BRmDUAMd.js";import"./useMakeFocusable-DLbAZGSO.js";import"./useToggleState-DfnSsBnT.js";import"./useFormReset-Bn-oECSu.js";import"./useControlledState-CmSk5MJT.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./FieldError-BoPnTUuW.js";import"./FieldError-BxxGUPOn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const Mr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>q(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(J,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(K,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const z=N();return r.jsx(P,{form:z,onSubmit:async()=>await q(2e3),children:r.jsx(e,{...o,children:r.jsx(t,{color:"accent",type:"submit",children:"Login"})})})}};var h,A,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(A=n.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var x,j,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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

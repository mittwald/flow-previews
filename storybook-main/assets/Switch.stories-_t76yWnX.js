import{j as r}from"./iframe-D2Anwmct.js";import{a as u,u as l,F as d,t as j}from"./Form-NvgoK1At.js";import{L as h}from"./Label-CqHNa78s.js";import{B as m}from"./Button-DzBCXdJ8.js";import{S as g}from"./Section-D-XgJ8U5.js";import{A as y}from"./ActionGroup-DwbiqJMg.js";import{s as f}from"./Action-TQJO2mvI.js";import{S as x}from"./Switch-DRIHkV-C.js";import"./index-Cun1SEai.js";import"./dynamic-Cfahilqg.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./clsx-B-dksMZM.js";import"./index-Ch7RQrKi.js";import"./FieldError-BoPnTUuW.js";import"./IconWarning-DnpABaws.js";import"./FieldError-BxxGUPOn.js";import"./utils-BpjcCBEz.js";import"./Text-lRP8kqf1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./browser-CPuaporN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./Text-DtdPLjLU.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./ContextMenuSection-DEYSZK6N.js";import"./Dialog-CzAn2oqc.js";import"./RSPContexts-W5re5w0Z.js";import"./OverlayArrow-nozbf4eZ.js";import"./useControlledState-CmSk5MJT.js";import"./Collection-C6c4IzCm.js";import"./CollectionBuilder-BN9-opMn.js";import"./context-X2EiAF6-.js";import"./Separator-XkOJaGaU.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./useCollator-DzTf225U.js";import"./FocusScope-B3f0Mp00.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./getActionGroupSlot-CMiTVAum.js";import"./useStatic-CHoU06Vl.js";import"./context-BRmDUAMd.js";import"./useMakeFocusable-DLbAZGSO.js";import"./useToggleState-DfnSsBnT.js";import"./useFormReset-Bn-oECSu.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <Switch>
            <Label>Text</Label>
          </Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const Lr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};

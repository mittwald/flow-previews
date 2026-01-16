import{j as r,r as F}from"./iframe-DjKJp4LH.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-B_aVigIr.js";import{B as d}from"./Button-BDEZ1Pgg.js";import{S as x}from"./Section-CJ66IskI.js";import{A as E}from"./ActionGroup-BWGbWjuD.js";import{s as c}from"./Action-CS8Seurr.js";import{S as m}from"./Switch-mP0ECEeM.js";import{F as j}from"./FieldError-DkeOn6Iq.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./clsx-B-dksMZM.js";import"./index-PXjpOTa6.js";import"./browser-DP-AFXYC.js";import"./dynamic-Cwgd_SYw.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./context-CaWPG6rd.js";import"./useRef-JBXf8btE.js";import"./utils-DyC1AhIW.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./Text-DIX_PQ8a.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./LoadingSpinner-pyPoMdb7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DheLTGmH.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel--MzsjFNv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cba7eTZL.js";import"./useFocus-DfQL19Qh.js";import"./useFocusRing-BGVhnkul.js";import"./useFocusable-Cypk5WsB.js";import"./ContextMenuSection-D6Byc7PS.js";import"./Dialog-B6ze-qTj.js";import"./RSPContexts-BW0AZj1S.js";import"./OverlayArrow-NBjjGcXc.js";import"./useControlledState-B7AKSDvs.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./VisuallyHidden-BM-dzb4f.js";import"./getActionGroupSlot-BcFDPTef.js";import"./useStatic-DSbbnRPw.js";import"./context-BJ5dxW4L.js";import"./useFieldComponent-7yFtRUym.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZbD7mMm.js";import"./useFormReset-BtBZQ9D7.js";import"./FieldError-CRskrSrV.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ar as default};

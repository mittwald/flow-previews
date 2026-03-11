import{r as F,j as r}from"./iframe-DlWpeVbs.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./FormRootError-DW845PWo.js";import{B as d}from"./Button-OB72uiKS.js";import{S as x}from"./Section-BrxRU1hJ.js";import{A as E}from"./ActionGroup-5C-gGCHv.js";import{s as c}from"./ActionBatch-C-ID7iPf.js";import{S as s}from"./Switch-7okJ4e96.js";import{F as j}from"./FieldError-wdxD7fJg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3tAnWym.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./clsx-B-dksMZM.js";import"./index-Ci0KQ92C.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./context-w6Z3dllt.js";import"./ActionGroupView-BIh_cM4-.js";import"./Content-opwEsj_c.js";import"./Heading-BJuxWHmq.js";import"./Heading-DCdSeC1b.js";import"./RSPContexts-8MG42HPe.js";import"./utils-BWqiCJWQ.js";import"./Text-BjwiRmws.js";import"./browser-CHTiPLC9.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Text-BEVTNZ1h.js";import"./Modal-O25jLubx.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./Overlay-DA629dSj.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./LoadingSpinner-C6D9eT_m.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./Dialog-DM93NPwE.js";import"./Button-BH6lR-Fb.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";import"./ButtonView-BEjF0cHe.js";import"./Flex-DFZNaOVm.js";import"./useRef-KpLHRpWI.js";import"./ContextMenuSection-BiNqDgyA.js";import"./getActionGroupSlot-bYWxcQao.js";import"./useFieldComponent-CpDSJ5w8.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-1KoeNqQn.js";import"./useFormReset-CZgOMFUA.js";import"./FieldError-CO2oyPLw.js";import"./AlertText-Bn9b-fyG.js";import"./AlertIcon-DyJmeCBc.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};

import{r as x,j as r}from"./iframe-DlWpeVbs.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./FormRootError-DW845PWo.js";import{B as d}from"./Button-OB72uiKS.js";import{S as j}from"./Section-BrxRU1hJ.js";import{A as b}from"./ActionGroup-5C-gGCHv.js";import{s as u}from"./ActionBatch-C-ID7iPf.js";import{C as t}from"./Checkbox-DMBZ-37l.js";import{F as E}from"./FieldError-wdxD7fJg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3tAnWym.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./clsx-B-dksMZM.js";import"./index-Ci0KQ92C.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./context-w6Z3dllt.js";import"./ActionGroupView-BIh_cM4-.js";import"./Content-opwEsj_c.js";import"./Heading-BJuxWHmq.js";import"./Heading-DCdSeC1b.js";import"./RSPContexts-8MG42HPe.js";import"./utils-BWqiCJWQ.js";import"./Text-BjwiRmws.js";import"./browser-CHTiPLC9.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Text-BEVTNZ1h.js";import"./Modal-O25jLubx.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./Overlay-DA629dSj.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./LoadingSpinner-C6D9eT_m.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./Dialog-DM93NPwE.js";import"./Button-BH6lR-Fb.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";import"./ButtonView-BEjF0cHe.js";import"./Flex-DFZNaOVm.js";import"./useRef-KpLHRpWI.js";import"./ContextMenuSection-BiNqDgyA.js";import"./getActionGroupSlot-bYWxcQao.js";import"./useFieldComponent-CpDSJ5w8.js";import"./FieldError-CO2oyPLw.js";import"./Form-IYTHWqtc.js";import"./useFormValidation-7MNrcMSj.js";import"./useToggleState-1KoeNqQn.js";import"./useFormReset-CZgOMFUA.js";import"./AlertText-Bn9b-fyG.js";import"./AlertIcon-DyJmeCBc.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};

import{j as r,r as x}from"./iframe-Bqcpbrss.js";import{b as c,u as p,F as a,t as F}from"./Form-BQQ7mOby.js";import{R as l,S as f}from"./ResetButton-YxixX2pb.js";import{B as d}from"./Button-Cnlerii9.js";import{S as j}from"./Section-Bc1hD-fo.js";import{A as b}from"./ActionGroup-6G6paD9M.js";import{s as u}from"./Action-B2JQUsel.js";import{C as t}from"./Checkbox-CckRW93h.js";import{F as E}from"./FieldError-B_AiZFnH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dekqokaj.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./clsx-B-dksMZM.js";import"./index-H5GW8qHY.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./context-BrwEoz3A.js";import"./browser-C4ue27yU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BJedWkRC.js";import"./useRef-DUppCNf-.js";import"./IconWarning-dEqiOsyE.js";import"./remote-DG6VBXek.js";import"./Text-BTcvwTq1.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./LoadingSpinner-CCDMAFHO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DylF7GCR.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./ContextMenuSection-C08RkJTE.js";import"./Dialog-Dpg78GNT.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./useStatic-DxBp64zy.js";import"./context-ChzSVWNL.js";import"./useFieldComponent-CI3p7oBW.js";import"./FieldError-DLGH1zeP.js";import"./Form-CNSKTjy-.js";import"./useFormValidation-D7KvBPrT.js";import"./useToggleState-VW9tyNMs.js";import"./useFormReset-BuAWhlth.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),_r={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const qr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,qr as __namedExportsOrder,_r as default};

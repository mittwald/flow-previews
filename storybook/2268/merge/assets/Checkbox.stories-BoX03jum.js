import{j as r,r as x}from"./iframe-iY_Mn_oy.js";import{b as c,u as p,F as a,t as F}from"./Form-BNcFjNMX.js";import{R as l,S as f}from"./ResetButton-BUk85j1K.js";import{B as d}from"./Button-BXdn408E.js";import{S as j}from"./Section-CuJxl25L.js";import{A as b}from"./ActionGroup-pEn2FCmY.js";import{s as u}from"./Action-iMWR4bsW.js";import{C as t}from"./Checkbox-D5-ncVKp.js";import{F as E}from"./FieldError-rrdHjYdT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CDOrKiJc.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./clsx-B-dksMZM.js";import"./index-IKthRYIx.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./context-DIbVk5_z.js";import"./browser-DK9hE6UN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-C-pMCGM-.js";import"./useRef-BXSpDy4V.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./Text-C2ZCo6gl.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./LoadingSpinner-C14k5CPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B5dXj1sU.js";import"./useFocus-Nxno6ZgW.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";import"./ContextMenuSection-DufqnfrN.js";import"./Dialog-BSCAVunC.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./useControlledState-DUH-ni6I.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./VisuallyHidden-DEFkQEyo.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./useStatic-BNEy2A13.js";import"./context-AuWKQf6d.js";import"./useFieldComponent-Cxjop7r-.js";import"./FieldError-BP_EVNQV.js";import"./Form-2TpMp3Y3.js";import"./useFormValidation-B6OmY3vR.js";import"./useToggleState-BD2iW2dI.js";import"./useFormReset-DJj-QXR5.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),wr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Dr as __namedExportsOrder,wr as default};

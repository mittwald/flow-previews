import{j as r,r as f}from"./iframe-CgV0BA21.js";import{a as c,u as a,F as u,t as h}from"./Form-Njtp-qwK.js";import{B as n}from"./Button-CNT8DxS9.js";import{S as x}from"./Section-sLT7TF5r.js";import{A as F}from"./ActionGroup-uSz-erXb.js";import{s as d}from"./Action-DZ2Xrd6d.js";import{C as o}from"./Checkbox-Cr4J__tA.js";import{F as j}from"./useFieldComponent-D1IKYPO_.js";import"./index-nuYtCEEu.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./clsx-B-dksMZM.js";import"./index-LOR_5P9o.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./context-DHnf2uKc.js";import"./browser-BkNcCpiL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-Cjg_6qhe.js";import"./Text-BKw3N1Oz.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./utils-BtxgbS4l.js";import"./LoadingSpinner-CAf9aLu0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxfThd7-.js";import"./ProgressBar-Buubgbe8.js";import"./Label-CttY7hce.js";import"./Hidden-jMQa5TyR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B3KDK_sh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh998neg.js";import"./useFocus-DCA5O52l.js";import"./useFocusRing-D4YLibcx.js";import"./useFocusable-CmuVkcp6.js";import"./ContextMenuSection-DduOvbG6.js";import"./Dialog-BuxTXh7Q.js";import"./RSPContexts-B0Fd51Ht.js";import"./OverlayArrow-B-9LgXoP.js";import"./useControlledState-REzwF7fx.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";import"./dynamic-BuNxxpAs.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./useStatic-BN9Sd72d.js";import"./context-CRjcTZWJ.js";import"./useMakeFocusable-BcUeToCB.js";import"./Form-Co57238C.js";import"./useFormValidation-AnXxOg_8.js";import"./useToggleState-D8v9aolG.js";import"./useFormReset-DmIBBfXo.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Or as __namedExportsOrder,kr as default};

import{r as x,j as r}from"./iframe-BV_gLY1W.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-pBI61JFE.js";import{L as o}from"./Label-DSp9Q3qx.js";import{B as p}from"./Button-SSCEZ0RO.js";import{S as g}from"./Section-DFw7sWw1.js";import{A as b}from"./ActionGroup-DGQFtnEO.js";import{s as u}from"./Action-B44IIYnD.js";import{N as t}from"./NumberField-DIgQzIN3.js";import{F as E}from"./FieldDescription-DJEI_ZDJ.js";import{F as S}from"./FieldError-Du2SwoFV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D0Gso-mt.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./clsx-B-dksMZM.js";import"./index-iDKz2btu.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./context-D0kYsfYD.js";import"./useRef--g3BlvKa.js";import"./utils-pcZMLEVF.js";import"./ButtonView-ByOlINbI.js";import"./browser-RRcj6Eel.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./IconWarning-BvnX4fSp.js";import"./remote-DzXnO2Bt.js";import"./Text-B1ZcDWdT.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./Text-x_iEgbKh.js";import"./LoadingSpinner-DwHnxPWs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BTyL1bMd.js";import"./ProgressBar-d-6uKhr8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BcIwqyBf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cpaxayx2.js";import"./useFocus-BhZlDk36.js";import"./useFocusRing-DHBFiW-v.js";import"./useFocusable-CF0VfUE0.js";import"./ContextMenuSection-uCRJ4fX1.js";import"./Dialog-DuYLlPOJ.js";import"./RSPContexts-C37Ie1k0.js";import"./OverlayArrow-BxTjv8xX.js";import"./useControlledState-D8GCi_t3.js";import"./Collection-B2K0MU6U.js";import"./CollectionBuilder-k5dkf4C0.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./Separator-C5PKpWVh.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./useCollator-DxbGnjFN.js";import"./FocusScope-Cdk-yaL2.js";import"./VisuallyHidden-282mV7GD.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./useStatic-Bro5j9qe.js";import"./context-DsGc8Cs0.js";import"./useFieldComponent-Ciy1vkCA.js";import"./useControlledHostValueProps-CdAs3b7f.js";import"./FieldError-Q2svFxIr.js";import"./Form-Cc8Ejva8.js";import"./Group-BmpY48KV.js";import"./Input-tiA0LuFc.js";import"./useFormValidation-Bzs4UsOG.js";import"./useSpinButton-DM28lal-.js";import"./useFormReset-Ba41Oqje.js";import"./useTextField-UbdMNCYP.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};

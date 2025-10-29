import{j as r,r as h}from"./iframe-M-00ByYr.js";import{a as l,u as d,F as u,t as F}from"./Form-CCjzRfYD.js";import{L as o}from"./Label-DT1JZy6g.js";import{B as i}from"./Button-Dye8aZJo.js";import{S as x}from"./Section-DxqiSUr-.js";import{A as j}from"./ActionGroup-DCfNsL7U.js";import{s as p}from"./Action-C6LgLFNM.js";import{N as t}from"./NumberField-eqnJU2IN.js";import{F as g}from"./FieldDescription-70lNmvry.js";import{F as b}from"./FieldError-ZwGpCE6l.js";import"./index-nuYtCEEu.js";import"./dynamic-COr1kucW.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./browser-DuQo-X1z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-2I2h4DuH.js";import"./utils-CzeOq9Jp.js";import"./Hidden-CcUUSr-p.js";import"./IconWarning-BKX4jvdo.js";import"./Text-Bt5YA1vc.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Dialog-DLSokgtV.js";import"./RSPContexts-D5gF1Lon.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useControlledState-Cpz-s1gG.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./useStatic-B0qB2N-4.js";import"./context-DSFC_3Cq.js";import"./useFieldComponent-CRgHa0Rs.js";import"./ClearPropsContext-DvyDrnsG.js";import"./ReactAriaControlledValueFix-Cd1cyM2V.js";import"./Form-B5fCCfio.js";import"./Group-Dk159ZYr.js";import"./Input-CPscax3_.js";import"./useFormValidation-Co3-d3Vs.js";import"./useSpinButton-v8Yy2hUe.js";import"./useFormReset-B1z61k1U.js";import"./useTextField-CKTQn_AI.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Rr=["Default","WithFieldError","WithFocus"];export{n as Default,m as WithFieldError,a as WithFocus,Rr as __namedExportsOrder,wr as default};

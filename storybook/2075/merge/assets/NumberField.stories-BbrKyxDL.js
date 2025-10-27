import{j as r,r as h}from"./iframe-C3YinX3s.js";import{a as l,u as d,F as u,t as F}from"./Form-C_5hYMpv.js";import{L as o}from"./Label-vc6tDbdp.js";import{B as i}from"./Button-B9MewrUz.js";import{S as x}from"./Section-C_5nF8l2.js";import{A as j}from"./ActionGroup-BpJBuAaq.js";import{s as p}from"./Action-DH4q3DMK.js";import{N as t}from"./NumberField-Df1IEzcC.js";import{F as g}from"./FieldDescription-DuQ-cxei.js";import{F as b}from"./useFieldComponent-unfYr68o.js";import"./index-nuYtCEEu.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./clsx-B-dksMZM.js";import"./index-BppZCGPZ.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./context-XadyItFl.js";import"./browser-DlgIuTl3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-uL4LTRYY.js";import"./utils-CkQtaKCN.js";import"./Hidden-RtymAw99.js";import"./IconWarning-6TASCfRR.js";import"./Text-40KOd3GJ.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Text-2o-hGpxv.js";import"./LoadingSpinner-BiveWKkE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBEcZBzR.js";import"./ProgressBar-DHxU0Tpr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6oysTp78.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEE7eirG.js";import"./useFocus-DuIK45_5.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocusable-Cpx8bVI7.js";import"./ContextMenuSection-ko5_btdi.js";import"./Dialog-CifFL37q.js";import"./RSPContexts-DbIyirJn.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useControlledState-DTNxqflL.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./VisuallyHidden-Bah8oUIC.js";import"./dynamic-BlWCyvfa.js";import"./getActionGroupSlot-DrHtarua.js";import"./useStatic-K2T119cA.js";import"./context-C6PcGqQE.js";import"./ReactAriaControlledValueFix-bFYYT4Mj.js";import"./Form-BCJL5_dO.js";import"./Group-CAUzS8Z9.js";import"./Input-MWLT5DSw.js";import"./useFormValidation-mKao3Dkx.js";import"./useSpinButton-D3_hjR8Z.js";import"./useFormReset-BgD1M5By.js";import"./useTextField-ZOQ3uZr1.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

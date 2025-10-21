import{j as r,r as h}from"./iframe-BziZnbbf.js";import{a as l,u as d,F as u,t as F}from"./Form-Zt6xDFWh.js";import{L as o}from"./Label-7ab3WcOE.js";import{B as i}from"./Button-BsOsKcj7.js";import{S as x}from"./Section-Bis1QFtl.js";import{A as j}from"./ActionGroup-B1HE_ON6.js";import{s as p}from"./Action-CnCRBxQU.js";import{N as t}from"./NumberField-DMx5F3xJ.js";import{F as g}from"./FieldDescription-mqFf-H3a.js";import{F as b}from"./useFieldComponent-yHiwdZcU.js";import"./index-nuYtCEEu.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./clsx-B-dksMZM.js";import"./index-_EM7mgZk.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./browser-BTvp61GS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-SVpetMhq.js";import"./utils-C0RTyIHD.js";import"./Hidden-Bnko_h1D.js";import"./IconWarning-CJvxfsrj.js";import"./Text-C2tTVpcM.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Czn71cHm.js";import"./ProgressBar-BJFeHLpH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-fjbW-LOk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D5emiALM.js";import"./useFocus-ycXwMZE-.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./ContextMenuSection-DQ1qfDRr.js";import"./Dialog-DGrVuAqN.js";import"./RSPContexts-CRnpb7uM.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";import"./dynamic-BFzO3wyN.js";import"./getActionGroupSlot-CSQVqoba.js";import"./useStatic-D6NPOV-R.js";import"./context-OFPqHilR.js";import"./ReactAriaControlledValueFix-ufU0tNg8.js";import"./Form-lya1P3V3.js";import"./Group-aJmZoBky.js";import"./Input-Diy1RLsK.js";import"./useFormValidation-CTvaA84d.js";import"./useSpinButton-C3e3wg4Y.js";import"./useFormReset-CzU-0SyG.js";import"./useTextField-QUd2KG_L.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

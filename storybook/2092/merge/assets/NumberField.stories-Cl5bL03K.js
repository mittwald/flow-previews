import{j as r,r as h}from"./iframe-DCa_XPw0.js";import{a as l,u as d,F as u,t as F}from"./Form-BRygFy9B.js";import{L as o}from"./Label-vDm2WQu9.js";import{B as i}from"./Button-5vT2-_W4.js";import{S as x}from"./Section-DMxoBBTe.js";import{A as j}from"./ActionGroup-B0BJPAOp.js";import{s as p}from"./Action-woDk9-dG.js";import{N as t}from"./NumberField-B-jXyOAz.js";import{F as g}from"./FieldDescription-gVsh-1jz.js";import{F as b}from"./useFieldComponent-DnSwczmT.js";import"./index-nuYtCEEu.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./clsx-B-dksMZM.js";import"./index-d5hFVLIP.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./context-CFo6-Xo4.js";import"./browser-2ZL6lgPg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCh_0unC.js";import"./utils-CHsRUe2b.js";import"./Hidden-DqzRERrR.js";import"./IconWarning-Q2oX1eiS.js";import"./Text-DnODaVEe.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./Text-I5qgKc0V.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-8oNj6zWV.js";import"./ProgressBar-D1oSpt7t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoF43DDZ.js";import"./useFocus-m8lB89Ac.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./ContextMenuSection-DAzc5rVw.js";import"./Dialog-jvkUQzt2.js";import"./RSPContexts-A2JzYqIb.js";import"./OverlayArrow-DWeqJ8mt.js";import"./useControlledState-CRVJv1rD.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./VisuallyHidden-D3RYJYP2.js";import"./dynamic-DrAw5ycp.js";import"./getActionGroupSlot-InsSo2J4.js";import"./useStatic-CrVdgLYB.js";import"./context-Dlf3CpRu.js";import"./ReactAriaControlledValueFix-BMN_qpn9.js";import"./Form-gH1nSwk6.js";import"./Group-DoigBsDb.js";import"./Input-Btedufej.js";import"./useFormValidation-Dya2y-k8.js";import"./useSpinButton-CiTRuNCW.js";import"./useFormReset-C_Ugenz9.js";import"./useTextField-B0SsZGN0.js";import"./react-children-utilities-BnxGKhPm.js";import"./ClearPropsContext-D7TWL38i.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

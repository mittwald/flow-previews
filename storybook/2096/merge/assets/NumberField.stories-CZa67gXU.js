import{j as r,r as h}from"./iframe-Tz0J7D4Y.js";import{a as l,u as d,F as u,t as F}from"./Form-BgW8CYzp.js";import{L as o}from"./Label-B5yMZfoe.js";import{B as i}from"./Button-DpdNCW8h.js";import{S as x}from"./Section-weR_orzI.js";import{A as j}from"./ActionGroup-B5YBX1jR.js";import{s as p}from"./Action-DDvM_T4v.js";import{N as t}from"./NumberField-BWVrsjzv.js";import{F as g}from"./FieldDescription-DfQkIZob.js";import{F as b}from"./useFieldComponent-C0OSANtm.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./clsx-B-dksMZM.js";import"./index-DcQDRvJj.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./context-B1lt5Uf-.js";import"./browser-D-jX3MAX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CPyZQCy0.js";import"./utils-ja91N2Nx.js";import"./Hidden-DjVegiGf.js";import"./IconWarning-GPTcuJJ8.js";import"./Text-C3A_eB8w.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Text-c129sBMT.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./ContextMenuSection-8rmu86AD.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./useControlledState-JfMoTEl5.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./dynamic-CoftMrEe.js";import"./getActionGroupSlot-DlZypVxI.js";import"./useStatic-BDAMVNvv.js";import"./context-CCjUHDCq.js";import"./ReactAriaControlledValueFix-rP8sVaUU.js";import"./Form-CgZM-WfL.js";import"./Group-BWtr-S31.js";import"./Input-fTg0rFoa.js";import"./useFormValidation-BhAnQ22o.js";import"./useSpinButton-B8giHKN1.js";import"./useFormReset-Dr7kbm5c.js";import"./useTextField-BJgUARR-.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

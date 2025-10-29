import{j as r,r as h}from"./iframe-qTztDmQ9.js";import{a as l,u as d,F as u,t as F}from"./Form-_TiOEZqw.js";import{L as o}from"./Label-B_HtseH-.js";import{B as i}from"./Button-B4S912ZH.js";import{S as x}from"./Section-_3FhfXN7.js";import{A as j}from"./ActionGroup-DAaZlTM3.js";import{s as p}from"./Action-DjajA33V.js";import{N as t}from"./NumberField-CWjdZ5WQ.js";import{F as g}from"./FieldDescription-M_rJr44b.js";import{F as b}from"./useFieldComponent-DGEmXGQh.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./clsx-B-dksMZM.js";import"./index-_9O3yG_2.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./context-bFJEZtp8.js";import"./browser-D-RoGxAl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bo8Flsc_.js";import"./utils-CdWUsvaa.js";import"./Hidden-B1UrvXuA.js";import"./IconWarning-DPAJHOeD.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Text-B9fEov2V.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dljjmf_y.js";import"./useFocus-CdJCReig.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./ContextMenuSection-CsIBhJMu.js";import"./Dialog-a9xsPkPz.js";import"./RSPContexts-C3w4xSHJ.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useControlledState-tlJilXH9.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./dynamic-BKe9EJ7U.js";import"./getActionGroupSlot-CA2czWAm.js";import"./useStatic-CJuuYRzf.js";import"./context-Cf3mID_7.js";import"./ReactAriaControlledValueFix-bx83Hzv3.js";import"./Form-D5uPTAwc.js";import"./Group-C0OfF-as.js";import"./Input-DABpozkM.js";import"./useFormValidation-DR7MCNfC.js";import"./useSpinButton-BR-lK896.js";import"./useFormReset-CmjicI53.js";import"./useTextField-CGOKXVnS.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

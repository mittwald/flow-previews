import{j as r,r as f}from"./iframe-qTztDmQ9.js";import{a as p,u as a,F as c,t as F}from"./Form-_TiOEZqw.js";import{B as m}from"./Button-B4S912ZH.js";import{S as h}from"./Section-_3FhfXN7.js";import{A as x}from"./ActionGroup-DAaZlTM3.js";import{s as d}from"./Action-DjajA33V.js";import{S as n}from"./Switch-BXBGqT-_.js";import{F as S}from"./useFieldComponent-DGEmXGQh.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./clsx-B-dksMZM.js";import"./index-_9O3yG_2.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./context-bFJEZtp8.js";import"./browser-D-RoGxAl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-DPAJHOeD.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Text-B9fEov2V.js";import"./utils-CdWUsvaa.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dljjmf_y.js";import"./useFocus-CdJCReig.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./ContextMenuSection-CsIBhJMu.js";import"./Dialog-a9xsPkPz.js";import"./RSPContexts-C3w4xSHJ.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useControlledState-tlJilXH9.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./dynamic-BKe9EJ7U.js";import"./getActionGroupSlot-CA2czWAm.js";import"./useStatic-CJuuYRzf.js";import"./context-Cf3mID_7.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CCDaBvVW.js";import"./useToggleState-DbzNfvF3.js";import"./useFormReset-CmjicI53.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,j=E("submit"),Or={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async l=>{await d(5e3),j(l)},o=a({defaultValues:{isEnabled:!1}}),u=F();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(u,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},i={render:t=>{const o=a();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,_r as __namedExportsOrder,Or as default};

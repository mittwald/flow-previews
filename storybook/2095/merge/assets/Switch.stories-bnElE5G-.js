import{j as r,r as f}from"./iframe-BvCo0Jms.js";import{a as p,u as a,F as c,t as F}from"./Form-Cf8bPcIw.js";import{B as m}from"./Button-BdRFLyHU.js";import{S as h}from"./Section-B56xh2AV.js";import{A as x}from"./ActionGroup-BBtpfHLw.js";import{s as d}from"./Action-B4Kyn-_S.js";import{S as n}from"./Switch-Cb9gv86U.js";import{F as S}from"./useFieldComponent-h58tn8zy.js";import"./index-nuYtCEEu.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./browser-DOebU0pA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-DF-Lhcnu.js";import"./Text-CM7-JVVa.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./utils-Cw2xzcbV.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./ContextMenuSection-D9cp5lxC.js";import"./Dialog-Bn7Do3Cm.js";import"./RSPContexts-DqErA_gH.js";import"./OverlayArrow-CPNbfpB1.js";import"./useControlledState-C0Hm7DMH.js";import"./Collection-DPawhEbh.js";import"./CollectionBuilder-BCns4Ten.js";import"./SelectionIndicator-CnEt238s.js";import"./Separator-CzBpIsK8.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./VisuallyHidden-ch7dD1y0.js";import"./dynamic-BmXp7BE9.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./useStatic-BT5cYh4l.js";import"./context-Dhm9rN8k.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-I3KvykiR.js";import"./useToggleState-CHglrmuU.js";import"./useFormReset-B8Yq5UFv.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,j=E("submit"),Or={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async l=>{await d(5e3),j(l)},o=a({defaultValues:{isEnabled:!1}}),u=F();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(u,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},i={render:t=>{const o=a();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

import{j as r,r as f}from"./iframe-CPZmCQj-.js";import{a as p,u as a,F as c,t as F}from"./Form-C6vWvGsj.js";import{B as m}from"./Button-CO0ZKbGC.js";import{S as h}from"./Section-BlZ_9OES.js";import{A as x}from"./ActionGroup-BEDNYTV6.js";import{s as d}from"./Action-C3sEJruT.js";import{S as n}from"./Switch-DWBf4OAI.js";import{F as S}from"./useFieldComponent-ZdrCImE8.js";import"./index-nuYtCEEu.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./browser-Vbuqg8Bp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BHYwQlMQ.js";import"./Text-cGw-MBFK.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./utils-DbTuSxgD.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLjAzLtk.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./ContextMenuSection-Dto6kOnn.js";import"./Dialog-DJw1jmu7.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";import"./dynamic-C0WBJwRj.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./useStatic-BEtxpUKF.js";import"./context-7pI23nLQ.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BIcdpqxH.js";import"./useToggleState-CgU4ubbL.js";import"./useFormReset-BZ0LqTvh.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,j=E("submit"),Or={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async l=>{await d(5e3),j(l)},o=a({defaultValues:{isEnabled:!1}}),u=F();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(u,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},i={render:t=>{const o=a();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

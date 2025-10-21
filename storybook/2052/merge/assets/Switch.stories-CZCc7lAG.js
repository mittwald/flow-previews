import{j as r,r as g}from"./iframe-DTheBFqg.js";import{a as p,u as a,F as c,t as w}from"./Form-Bb0OZPQ3.js";import{B as m}from"./Button-Bmq0qjWo.js";import{S as B}from"./Section-BDBFYB_1.js";import{A as O}from"./ActionGroup-Cjs4nxWu.js";import{s as d}from"./Action-XVrtYdEu.js";import{S as n}from"./Switch-CvPH0ntY.js";import{F as _}from"./useFieldComponent-mBN-j8SF.js";import"./index-Cun1SEai.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./clsx-B-dksMZM.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./browser-BqPz5wcV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CXTS1Zmo.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./utils-CIVb4-pA.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./dynamic-DYsVCHyX.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./useStatic-KScOH6sT.js";import"./context-D5Eh6Kjh.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-DG-Ql63t.js";import"./useToggleState-SFl-JBqp.js";import"./useFormReset-C6eFdCIy.js";import"./react-children-utilities-g2QZgYrG.js";import"./ClearPropsContext-NW1-nYLP.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,A=q("submit"),vr={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async y=>{await d(5e3),A(y)},o=a({defaultValues:{isEnabled:!1}}),b=w();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(b,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(O,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},i={render:t=>{const o=a();return g.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var u,l,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(l=e.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var F,h,x;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,E,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(E=s.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Ir as __namedExportsOrder,vr as default};

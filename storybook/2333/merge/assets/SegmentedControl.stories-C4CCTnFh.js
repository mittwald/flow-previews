import{r as g,j as e}from"./iframe-Cbm1tYQ5.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-CR0iXgtB.js";import{L as i}from"./Label-C1u7fixG.js";import{B as d}from"./Button-Cqfz7zcL.js";import{S as F}from"./Section-B0QB89CB.js";import{A as b}from"./ActionGroup-DDbBTeyS.js";import{s as u}from"./ActionBatch-CjHdyiP4.js";import{S as s,a as r}from"./Segment-CWxjzpJa.js";import{F as v}from"./FieldError-DdEKXl5v.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CgrPgLPo.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./clsx-B-dksMZM.js";import"./index-cwYx15Z_.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./context-CpUEkiXT.js";import"./ActionGroupView-C0tm-8ht.js";import"./Content-Bz7pLqo2.js";import"./Heading-DoywAf3I.js";import"./Heading-CJu_lfUD.js";import"./RSPContexts-BN50OY8k.js";import"./utils-CwSfACxU.js";import"./Text-K6yu7K7n.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./Text-CRfwxtsq.js";import"./Modal-B7ggXlTZ.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./Overlay-Cr8QYrRm.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./LoadingSpinner-CziFUZ0y.js";import"./IconWarning-HRESMERf.js";import"./remote-CNywZcFz.js";import"./Dialog-DOWWi4PD.js";import"./Button-DMDpRFJa.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-cWxohr.js";import"./useFocus-DGTwh-gS.js";import"./useFocusRing-2ds-u5nI.js";import"./useFocusable-DfxkJnS0.js";import"./OverlayArrow-DLVTOKg_.js";import"./useControlledState-CcdBsJdv.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./VisuallyHidden--ZEPdGNY.js";import"./ButtonView-DnjtrRMk.js";import"./Flex-727o-fn3.js";import"./useRef-lBqR2J42.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BbEgK5mq.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./useFieldComponent-BRiGBo1N.js";import"./useMakeFocusable-C4XeOx_r.js";import"./RadioGroup-CLF8O-kT.js";import"./FieldError-b__4rZn4.js";import"./Form-DE723K-l.js";import"./useFormValidation-SL6QRRh_.js";import"./useFormReset-DovDq4jf.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
        </Field>
        <SegmentedControl isInvalid>
          <Label>Role</Label>
          <Segment value="admin">Admin</Segment>
          <Segment value="member">Member</Segment>
          <Segment value="accountant">Accountant</Segment>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SegmentedControl>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Ve=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ve as __namedExportsOrder,Ue as default};

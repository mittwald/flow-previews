import{j as e,r as y}from"./iframe-CwuqIU3i.js";import{a as l,u as c,F as d,t as B}from"./Form-C_LQ2LWw.js";import{L as s}from"./Label-B0BiyK3O.js";import{B as i}from"./Button-BqbqUci_.js";import{S as R}from"./Section-LUqPWyIZ.js";import{A as C}from"./ActionGroup-K4almCLG.js";import{s as u}from"./Action-Dz8VIf0X.js";import{S as a,a as r}from"./Segment-vHJ9bQss.js";import{F as L}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./useMakeFocusable-ChwytvWt.js";import"./RadioGroup-C3J8MfJX.js";import"./Form-C1wZYKgN.js";import"./useFormValidation-DK6PIssV.js";import"./useFormReset-BLDFw02N.js";import"./react-children-utilities-BfKePjVo.js";import"./ClearPropsContext-DGTEyAkG.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,M=O("submit"),Te={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const t=async A=>{await u(5e3),M(A)},v=c({defaultValues:{user:""}}),E=B();return e.jsx(d,{form:v,onSubmit:t,children:e.jsxs(R,{children:[e.jsx(E,{name:"user",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx(C,{children:e.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},n={render:()=>{const t=c();return y.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(a,{isInvalid:!0,children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(L,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=c();return e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(i,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(i,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(i,{type:"submit",children:"Submit"})]})}};var p,h,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,g,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var F,j,b;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(b=(j=m.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const ke=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,ke as __namedExportsOrder,Te as default};

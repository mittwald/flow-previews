import{r as g,j as e}from"./iframe-BF3zk0it.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-UxrlNzUI.js";import{L as i}from"./Label-DcRc8bay.js";import{B as d}from"./Button-ZNdemegp.js";import{S as F}from"./Section-CrNjTCEJ.js";import{A as b}from"./ActionGroup-DJsQWQF2.js";import{s as u}from"./ActionBatch-DvnrQlZS.js";import{S as s,a as r}from"./Segment-D3FN91bk.js";import{F as v}from"./FieldError-C2kAtlyK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DMyjxIhV.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./context-B_W42rBs.js";import"./ActionGroupView-DXV0SNwP.js";import"./Content-DDW4skoa.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./RSPContexts-ssfE85JL.js";import"./utils-Ds629Okb.js";import"./Text-C9_U4GIb.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Text-CwwNB0nU.js";import"./Modal-CVbQ3im3.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./Overlay-CyMqAfYA.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./LoadingSpinner-BryS_W8u.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./Dialog-IYHamviF.js";import"./Button-CioOZKSP.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./ButtonView-CID7lXee.js";import"./Flex-Box9uTPb.js";import"./useRef-C7wP-y9c.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DmXH8tfJ.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./useFieldComponent-Z2yLJYUo.js";import"./useMakeFocusable-CNDpUSUP.js";import"./RadioGroup-CMgaRnEi.js";import"./FieldError-WTvIa9hl.js";import"./Form-r-oZJvOh.js";import"./useFormValidation-Clvn3NKc.js";import"./useFormReset-Dd7cUUSK.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

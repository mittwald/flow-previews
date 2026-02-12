import{r as g,j as e}from"./iframe-jPI25t47.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-B5ZX2fMA.js";import{L as i}from"./Label-CVxkn5sg.js";import{B as d}from"./Button-CMdL10Ys.js";import{S as F}from"./Section-wgX4yeQq.js";import{A as b}from"./ActionGroup-19L6oHyS.js";import{s as u}from"./ActionBatch-DVEQdHps.js";import{S as s,a as r}from"./Segment-B-3H-tUo.js";import{F as v}from"./FieldError-DPfGZS1P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DcvTJJQa.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./clsx-B-dksMZM.js";import"./index-mBlsDuvj.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./ActionGroupView-BqWWBXhU.js";import"./Content-KabCAW67.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./utils-DssEHlsW.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./Modal-CdjOxPJU.js";import"./Overlay-BMoI33va.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./LoadingSpinner-DhHtGG23.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./ButtonView-quZyuTrS.js";import"./Flex-DvdXj1RM.js";import"./useRef-XiRQpzNC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BG427zDb.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./useFieldComponent-CHdLkU8r.js";import"./useMakeFocusable-BecMGTye.js";import"./RadioGroup-CDbklP88.js";import"./FieldError-C3mwkvrq.js";import"./Form-BeysAUF2.js";import"./useFormValidation-aAlw1sTR.js";import"./useFormReset-DGTIvKtn.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

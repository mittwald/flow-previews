import{j as e,r as g}from"./iframe-DpNCYkDX.js";import{b as a,u as l,F as c,t as j}from"./Form-y1whqzWu.js";import{L as i}from"./Label-DxyEdRqz.js";import{R as p,S as h}from"./ResetButton-D3EbzuUq.js";import{B as d}from"./Button-CB8TQqfw.js";import{S as F}from"./Section-Xx985Qwf.js";import{A as b}from"./ActionGroup-DQeeqJWq.js";import{s as u}from"./Action-CnYZaomm.js";import{S as s,a as r}from"./Segment-C28T3FUm.js";import{F as v}from"./FieldError-CLVEK_uH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOXkjdco.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./clsx-B-dksMZM.js";import"./index-lXFaKghW.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./context-Df7wrknH.js";import"./browser-BfCz5g6M.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DRXP2wjN.js";import"./utils-YaT_C2bO.js";import"./Hidden-AzE2Q4X1.js";import"./useRef-Daxuqj_w.js";import"./IconWarning-CcmUiij-.js";import"./remote-FHZXAXl3.js";import"./Text-Bp6u83O8.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./Text-B4MgbG6f.js";import"./LoadingSpinner-mT2tjpr6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAbgtjDL.js";import"./ProgressBar-BiLC8jqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtioSroH.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OMCV4DY8.js";import"./useFocus-CLy8_GQ0.js";import"./useFocusRing-DWz_LOyJ.js";import"./useFocusable-BsZoANuz.js";import"./ContextMenuSection-BWIiCJCm.js";import"./Dialog-DtZU9YT9.js";import"./RSPContexts-_XCAh6rU.js";import"./OverlayArrow-DaAbsuct.js";import"./useControlledState-CFzFCELG.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./VisuallyHidden-BhiVW_d3.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./useStatic-C-pVfuV7.js";import"./context-CUs0iBzd.js";import"./useFieldComponent-CtyBuaGz.js";import"./useMakeFocusable-CMEHR1dt.js";import"./RadioGroup-CT8mlVJ3.js";import"./FieldError-DsNqYoam.js";import"./Form-Ce-l7r4o.js";import"./useFormValidation-Db_N1-Xt.js";import"./useFormReset-BsRaFjct.js";import"./AlertText-DNWtIllY.js";import"./AlertIcon-CnmOZB_U.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),De={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Te=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Te as __namedExportsOrder,De as default};

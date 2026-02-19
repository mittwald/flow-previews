import{r as C,j as r}from"./iframe-Bvl8-Rhq.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-C3zAOGNm.js";import{B as l}from"./Button-_6nTdRI5.js";import{S as B}from"./Section-oIxjsMS9.js";import{A as b}from"./ActionGroup-vTKVeA17.js";import{s as u}from"./ActionBatch-TusZCIcz.js";import{T as i}from"./Text-CBdBop4j.js";import{C as m}from"./CheckboxButton-DXYP8HtB.js";import{C as p}from"./Content-twBtn99c.js";import{F as E}from"./FieldError-BkA2bgrH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-hIR-PLzh.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./Overlay-CgTeHkhl.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./utils-D7QihGpD.js";import"./Dialog-BAI9Op-m.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useFocusable-CNuLnnFg.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./Text-BaIKemC9.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./VisuallyHidden-ScIHpAUT.js";import"./ActionGroupView-CTEFX79v.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./Modal-DJXXBtnB.js";import"./ButtonView-D4KdSaST.js";import"./Flex-CFHOPjrr.js";import"./useRef-CSfk6Gqo.js";import"./browser-B1OJJ6Dj.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./getActionGroupSlot-ConeELan.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Checkbox-CwCj2R4x.js";import"./useFieldComponent-D4BbqCv_.js";import"./FieldError-Du4MQwEm.js";import"./Form-D70wz7aV.js";import"./useFormValidation-Cl3HF3fr.js";import"./useToggleState-Dnvz7fxs.js";import"./useFormReset-C0JkbMmh.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};

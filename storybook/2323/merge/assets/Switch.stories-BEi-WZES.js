import{r as F,j as r}from"./iframe-Bvl8-Rhq.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-C3zAOGNm.js";import{B as d}from"./Button-_6nTdRI5.js";import{S as x}from"./Section-oIxjsMS9.js";import{A as E}from"./ActionGroup-vTKVeA17.js";import{s as c}from"./ActionBatch-TusZCIcz.js";import{S as s}from"./Switch-66xOqIyi.js";import{F as j}from"./FieldError-BkA2bgrH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-hIR-PLzh.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./Overlay-CgTeHkhl.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./utils-D7QihGpD.js";import"./Dialog-BAI9Op-m.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C7_C1qgD.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useFocusable-CNuLnnFg.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./Text-BaIKemC9.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./VisuallyHidden-ScIHpAUT.js";import"./ActionGroupView-CTEFX79v.js";import"./Content-twBtn99c.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./Text-CBdBop4j.js";import"./browser-B1OJJ6Dj.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Modal-DJXXBtnB.js";import"./ButtonView-D4KdSaST.js";import"./Flex-CFHOPjrr.js";import"./useRef-CSfk6Gqo.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./getActionGroupSlot-ConeELan.js";import"./useFieldComponent-D4BbqCv_.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dnvz7fxs.js";import"./useFormReset-C0JkbMmh.js";import"./FieldError-Du4MQwEm.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};

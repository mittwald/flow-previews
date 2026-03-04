import{r as F,j as r}from"./iframe-CwpToEZy.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-BvevyXvN.js";import{B as d}from"./Button-Cw2xgR_6.js";import{S as x}from"./Section-C5Yt0rDG.js";import{A as E}from"./ActionGroup-Cke5umNz.js";import{s as c}from"./ActionBatch-DcvnwnMD.js";import{S as s}from"./Switch-CqYSsJsi.js";import{F as j}from"./FieldError-P_YSxT2d.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfOleVAa.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./clsx-B-dksMZM.js";import"./index-G1voh-81.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./context-DWVDZDUv.js";import"./ActionGroupView-BEWtiWZf.js";import"./Content-04TsN1VN.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./RSPContexts-DAz7wbZz.js";import"./utils-3nROwXn_.js";import"./Text-DRk3V-Fm.js";import"./browser-DhIaf7O7.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Text-Cb4d8n7F.js";import"./Modal-09gASXkd.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./Overlay-B3hqAdST.js";import"./OverlayContextProvider-CBORYkOm.js";import"./LoadingSpinner-CN3jmE_K.js";import"./IconWarning-BRui_VYo.js";import"./remote-DRomu556.js";import"./Dialog-CQ_DXP4m.js";import"./Button-CuwTmUjn.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kUL6l53_.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useFocusable-ixEZOImu.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";import"./ButtonView-EQ3fadJN.js";import"./Flex-DxGhnD35.js";import"./useRef-Oq-jnguU.js";import"./ContextMenuSection-vq3x4ZL9.js";import"./getActionGroupSlot-DtR43x--.js";import"./useFieldComponent-CneqxYGw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Doj7UKiV.js";import"./useFormReset-BARG9uBg.js";import"./FieldError-BoYVEB6S.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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

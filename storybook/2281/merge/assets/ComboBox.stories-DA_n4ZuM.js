import{j as o,r as y}from"./iframe-B-26223i.js";import{a as u,u as x,F as j,t as g,R as O,S as w}from"./ResetButton-BQyw1x6f.js";import{L as r}from"./Label-htHf1MZ3.js";import{B as t}from"./Button-B60fo84_.js";import{S as B}from"./Section-Dq69RUil.js";import{A as C}from"./ActionGroup-BPwiJ8d1.js";import{s as f}from"./Action-CKtvTujB.js";import{O as n}from"./Option-B_84pV4n.js";import{C as i}from"./ComboBox-Cfa93xWG.js";import{C as p,a as l}from"./ContextualHelpTrigger-DYImvMVH.js";import{T as c}from"./Text-C25EED6m.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{F as E}from"./FieldError-DKJxt2u7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DWm47R25.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./clsx-B-dksMZM.js";import"./index-CMj-JRml.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./context-B9n95xcZ.js";import"./useRef-BniYW6fy.js";import"./utils-CprJ_klo.js";import"./ButtonView-N6QWot1B.js";import"./browser-DNWQphaZ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./LoadingSpinner-CNdw31t2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C9Zg0tM0.js";import"./ProgressBar-DwD1l90a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUREvcwl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlwAXRn7.js";import"./useFocus-DYSsUR82.js";import"./useFocusRing-DATGHg9y.js";import"./useFocusable-CRgLtiVg.js";import"./ContextMenuSection-EzbGflNa.js";import"./Dialog-COoPEj_z.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./useControlledState-CCY4nzRh.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./Text-CrdzXlCc.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./VisuallyHidden-DpBOnOEH.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./useStatic-DyURBROl.js";import"./context-JKAIHclB.js";import"./Popover-iofx4eop.js";import"./useOverlayController-Bd-vbTeq.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./ListBox-CnJI4KB5.js";import"./DragAndDrop-BY-1ebyQ.js";import"./inertValue-C5gfmg2v.js";import"./useListState-DT8u3LfR.js";import"./useFieldComponent-eul3OsXk.js";import"./FieldError-B1RwUwkr.js";import"./Form-Vtk-UJSV.js";import"./Group-DQX_CbI0.js";import"./Input-C02u9QAf.js";import"./useFilter-Dwu_U_jl.js";import"./useFormValidation-CodwuA9r.js";import"./useSingleSelectListState-DU_JD3GL.js";import"./useUpdateEffect-zBTPnX2T.js";import"./useTextField-CNHOwRrb.js";import"./useFormReset-BQreYCpE.js";import"./OverlayTrigger-DHG4FXf-.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),rn={title:"Integrations/React Hook Form/ComboBox",component:u,render:()=>{const e=async b=>{await f(1500),S(b)},F=x({defaultValues:{domain:"",domainDefaultValue:"mydomain.de",domainRequired:""}}),d=g();return o.jsx(j,{form:F,onSubmit:e,children:o.jsxs(B,{children:[o.jsx(d,{name:"domain",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainDefaultValue",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainRequired",rules:{required:"Please select a domain"},children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsxs(C,{children:[o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})]})})}},m={},a={render:()=>{const e=x({defaultValues:{field:""}});return y.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsxs(i,{isInvalid:!0,children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=x({defaultValues:{field:""}});return o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),o.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <ComboBox>
            <Label>
              Domain
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>mydomain.de</Option>
            <Option>shop.mydomain.de</Option>
            <Option>anotherdomain.com</Option>
            <Option>www.anotherdomain.com</Option>
            <Option>anotherdomain.com/shop</Option>
            <Option>anotherdomain.com/blog</Option>
            <Option>onemoredomain.de</Option>
            <Option>www.onemoredomain.de</Option>
          </ComboBox>
        </Field>
        <ComboBox isInvalid>
          <Label>
            Domain
            <ContextualHelpTrigger>
              <Button />
              <ContextualHelp>
                <Text>{dummyText.short}</Text>
              </ContextualHelp>
            </ContextualHelpTrigger>
          </Label>
          <Option>mydomain.de</Option>
          <Option>shop.mydomain.de</Option>
          <Option>anotherdomain.com</Option>
          <Option>www.anotherdomain.com</Option>
          <Option>anotherdomain.com/shop</Option>
          <Option>anotherdomain.com/blog</Option>
          <Option>onemoredomain.de</Option>
          <Option>www.onemoredomain.de</Option>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </ComboBox>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <ComboBox>
            <Label>
              Domain
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>mydomain.de</Option>
            <Option>shop.mydomain.de</Option>
            <Option>anotherdomain.com</Option>
            <Option>www.anotherdomain.com</Option>
            <Option>anotherdomain.com/shop</Option>
            <Option>anotherdomain.com/blog</Option>
            <Option>onemoredomain.de</Option>
            <Option>www.onemoredomain.de</Option>
          </ComboBox>
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
}`,...s.parameters?.docs?.source}}};const tn=["Default","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,s as WithFocus,tn as __namedExportsOrder,rn as default};

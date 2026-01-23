import{j as o,r as y}from"./iframe-Pk_Kk4JL.js";import{b as u,u as x,F as j,t as g}from"./Form-Cv3LQ1Ee.js";import{L as r}from"./Label-pFLu8ztF.js";import{R as O,S as w}from"./ResetButton-6SgmR9Ge.js";import{B as t}from"./Button-D9QX6l1e.js";import{S as B}from"./Section-CNK16UAG.js";import{A as C}from"./ActionGroup-Bf9c-qmg.js";import{s as f}from"./Action-C8SSnKxx.js";import{O as n}from"./Option-B5AV2pJo.js";import{C as i}from"./ComboBox-bxBGMYL_.js";import{C as p,a as l}from"./ContextualHelpTrigger-B-J2Vgpr.js";import{T as c}from"./Text-yAUoHBmv.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{F as E}from"./FieldError-2o2dfDUN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-I4mA0X6x.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./clsx-B-dksMZM.js";import"./index-BO3AnCjb.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./context-CrHSUJ76.js";import"./browser-DxGxcnNA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BhzG_WzN.js";import"./utils-CLxMEgR2.js";import"./Hidden-D3BnJIdN.js";import"./useRef-Dfd838tz.js";import"./IconWarning-BZbEOivs.js";import"./remote-jZTk_Znj.js";import"./LoadingSpinner-DPjJtv8A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./ContextMenuSection-C_1sxa8j.js";import"./Dialog-hqEaC_v2.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useControlledState-48Ld73MP.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./Text-cuBcImQE.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./useStatic-i-ZCX3ob.js";import"./context-DgSiNkYd.js";import"./Popover-CNf49oKt.js";import"./useOverlayController-C-ffow-t.js";import"./OverlayContextProvider-FOEyue6v.js";import"./ListBox-BwhaM1d1.js";import"./DragAndDrop-BvPASbSG.js";import"./inertValue-CmbvuW-R.js";import"./useListState-DuAdBoQO.js";import"./useFieldComponent-T3_INYSJ.js";import"./FieldError-Cm-TOrp1.js";import"./Form-kujN0LYD.js";import"./Group-vGwN-WPg.js";import"./Input-DA7G6uHH.js";import"./useFilter-9NSF7SWb.js";import"./useFormValidation-BDoYoAKM.js";import"./useSingleSelectListState-vt0oBVqp.js";import"./useUpdateEffect-BYWzOYk0.js";import"./useTextField-B9WpeGti.js";import"./useFormReset-bAhSNWNb.js";import"./OverlayTrigger-C6V65Cj9.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./AlertText-B5n-OsOE.js";import"./AlertIcon-BQAdHRLg.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),tn={title:"Integrations/React Hook Form/ComboBox",component:u,render:()=>{const e=async b=>{await f(1500),S(b)},F=x({defaultValues:{domain:"",domainDefaultValue:"mydomain.de",domainRequired:""}}),d=g();return o.jsx(j,{form:F,onSubmit:e,children:o.jsxs(B,{children:[o.jsx(d,{name:"domain",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainDefaultValue",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainRequired",rules:{required:"Please select a domain"},children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsxs(C,{children:[o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})]})})}},m={},a={render:()=>{const e=x({defaultValues:{field:""}});return y.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsxs(i,{isInvalid:!0,children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=x({defaultValues:{field:""}});return o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),o.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const mn=["Default","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,s as WithFocus,mn as __namedExportsOrder,tn as default};

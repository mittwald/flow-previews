import{j as o,r as y}from"./iframe-BTP_Z9Sf.js";import{a as u,u as x,F as j,t as g,R as O,S as w}from"./ResetButton-D_dyfali.js";import{L as r}from"./Label-Cu7NRaqa.js";import{B as t}from"./Button-er0RkDrE.js";import{S as B}from"./Section-Bql58_C6.js";import{A as C}from"./ActionGroup-Kh2CN0rv.js";import{s as f}from"./Action-CBjIM5JV.js";import{O as n}from"./Option-ExmvNUQw.js";import{C as i}from"./ComboBox-CVVnsYBq.js";import{C as p,a as l}from"./ContextualHelpTrigger-BB31TsW4.js";import{T as c}from"./Text-Cq5MQ8wu.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{F as E}from"./FieldError-DnUQcxCL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-LcJrXyvC.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./clsx-B-dksMZM.js";import"./index-E_qagHnK.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./useRef-Fcqlcr2u.js";import"./utils-DP1LA6WE.js";import"./ButtonView-B2TbsKhv.js";import"./browser-eyJ8FPIK.js";import"./Label.module-CUYTf9Jc.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BnZLj0Nc.js";import"./useFocus-BU1lOliM.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./ContextMenuSection-De_H5Wjl.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./Text-CZ1YR4oj.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./getActionGroupSlot-V7kcySO7.js";import"./useStatic-kc5QKD7I.js";import"./context-BwxZaZwM.js";import"./Popover-6hqQcqfJ.js";import"./useOverlayController-BkO0277u.js";import"./OverlayContextProvider-qUQ07J32.js";import"./ListBox-BFfMZAmk.js";import"./DragAndDrop-BNd6Uwul.js";import"./inertValue-GkEdaMhV.js";import"./useListState-DcAUe0RL.js";import"./useFieldComponent-Da-vFXDP.js";import"./FieldError-BvNBTK6b.js";import"./Form-BB65cxFE.js";import"./Group-D6HmZmNZ.js";import"./Input-Cgr_O3PE.js";import"./useFilter-dvQucgHZ.js";import"./useFormValidation-HNZmieSP.js";import"./useSingleSelectListState-CrBPVppm.js";import"./useUpdateEffect-DidJS3_9.js";import"./useTextField-D5-cYn1Z.js";import"./useFormReset-Bo1Ib9da.js";import"./OverlayTrigger-B5XE0ce4.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),rn={title:"Integrations/React Hook Form/ComboBox",component:u,render:()=>{const e=async b=>{await f(1500),S(b)},F=x({defaultValues:{domain:"",domainDefaultValue:"mydomain.de",domainRequired:""}}),d=g();return o.jsx(j,{form:F,onSubmit:e,children:o.jsxs(B,{children:[o.jsx(d,{name:"domain",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainDefaultValue",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainRequired",rules:{required:"Please select a domain"},children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsxs(C,{children:[o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})]})})}},m={},a={render:()=>{const e=x({defaultValues:{field:""}});return y.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsxs(i,{isInvalid:!0,children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=x({defaultValues:{field:""}});return o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),o.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

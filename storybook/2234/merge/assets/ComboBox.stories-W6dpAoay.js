import{j as o,r as y}from"./iframe-ByN7k_Da.js";import{b as u,u as x,F as j,t as g}from"./Form-A9NbCi2n.js";import{L as r}from"./Label-BBHPfwM0.js";import{R as O,S as w}from"./ResetButton-DsCSi1o1.js";import{B as t}from"./Button-DLduC619.js";import{S as B}from"./Section-DskLKzhN.js";import{A as C}from"./ActionGroup-CeHX0BIO.js";import{s as f}from"./Action-BmGz2Z1M.js";import{O as n}from"./Option-DjKscj_C.js";import{C as i}from"./ComboBox-446EoREL.js";import{C as p,a as l}from"./ContextualHelpTrigger-eFhUVosc.js";import{T as c}from"./Text-Cb-8LAS5.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import{F as E}from"./FieldError-Dqic_FOg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CwJG9Kct.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./clsx-B-dksMZM.js";import"./index-bUl7c0HC.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./context-rGL7bC8_.js";import"./browser-Co1wUnJx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BgjwP7On.js";import"./utils-D8xEYOuW.js";import"./Hidden-LyHOqGkt.js";import"./useRef-BvFrDEXj.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAFU8pmb.js";import"./ProgressBar-BhTwnbUK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./ContextMenuSection-Cx4PBQo5.js";import"./Dialog-Cvkq5YiV.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./useControlledState-kSDz6lD9.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./Text-j0nufsIB.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./VisuallyHidden-CV3OLvgc.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./useStatic-BKQ_69l_.js";import"./context-D7USXnL-.js";import"./Popover-C4a2YCNk.js";import"./useOverlayController-B-zt5KRt.js";import"./OverlayContextProvider-CJmTzcIB.js";import"./ListBox-BC1PpRw0.js";import"./DragAndDrop-DB4Le6Gh.js";import"./inertValue-BU_DtcLi.js";import"./useListState-Bl4tNsJa.js";import"./useFieldComponent-DAKvP2zf.js";import"./FieldError-JBJ_RfAm.js";import"./Form-Ccgq6KTF.js";import"./Group-DdqPhRGU.js";import"./Input-BhhO42Bj.js";import"./useFilter-DJtcmODR.js";import"./useFormValidation-C6EqEf55.js";import"./useSingleSelectListState-DBoU-2oV.js";import"./useUpdateEffect-BUPUp2eR.js";import"./useTextField-C-YehVVB.js";import"./useFormReset-Bc5cKrWY.js";import"./OverlayTrigger-CEg2Xl2L.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),tn={title:"Integrations/React Hook Form/ComboBox",component:u,render:()=>{const e=async b=>{await f(1500),S(b)},F=x({defaultValues:{domain:"",domainDefaultValue:"mydomain.de",domainRequired:""}}),d=g();return o.jsx(j,{form:F,onSubmit:e,children:o.jsxs(B,{children:[o.jsx(d,{name:"domain",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainDefaultValue",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainRequired",rules:{required:"Please select a domain"},children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsxs(C,{children:[o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})]})})}},m={},a={render:()=>{const e=x({defaultValues:{field:""}});return y.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsxs(i,{isInvalid:!0,children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=x({defaultValues:{field:""}});return o.jsxs(j,{form:e,onSubmit:async()=>await f(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),o.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),o.jsx(O,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

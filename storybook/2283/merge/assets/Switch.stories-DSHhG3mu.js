import{j as r,r as F}from"./iframe-lb0QDBc2.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-BoIjL6Sy.js";import{B as d}from"./Button-juKgyftR.js";import{S as x}from"./Section-RCiCRE5k.js";import{A as E}from"./ActionGroup-egKtEln5.js";import{s as c}from"./Action-4cKKicYt.js";import{S as m}from"./Switch-CjVVIn_n.js";import{F as j}from"./FieldError-BAOq6bLD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-oimbFEy9.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./clsx-B-dksMZM.js";import"./index-DLJvSM0l.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./context-DKVhGweU.js";import"./useRef-DRtsYaws.js";import"./utils-r2dAqIcX.js";import"./ButtonView-BbORIuhL.js";import"./browser-D6xfswL2.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./Text-Bvo-yLEA.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./LoadingSpinner-D-Hn99XA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3ym-GoV.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DBnvm8X4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgYa4G9K.js";import"./useFocus-B48NrLMU.js";import"./useFocusRing-J18h0CnC.js";import"./useFocusable-BRnBN5zK.js";import"./ContextMenuSection-BhdaIGz3.js";import"./Dialog-21JmjHkj.js";import"./RSPContexts-YTE8c3lP.js";import"./OverlayArrow-CyZLGayb.js";import"./useControlledState-BS6Up44I.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./useStatic-C9kOien4.js";import"./context-C_yF8yzC.js";import"./useFieldComponent-DzHSa8uO.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CuJBCnJp.js";import"./useFormReset-BIwT2nL6.js";import"./FieldError-dmorJJtq.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};

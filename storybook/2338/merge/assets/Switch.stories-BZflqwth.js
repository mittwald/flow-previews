import{r as x,j as r}from"./iframe-BcqfzoOA.js";import{a as m,u as p,F as a,R as l,S as u,t as E}from"./ResetButton--7CtDtWT.js";import{B as d}from"./Button-C2msjhlA.js";import{S as f}from"./Section-B_QgMIam.js";import{A as h}from"./ActionGroup-Cjv-TUqT.js";import{s as c}from"./ActionBatch-D231mKj-.js";import{S as n}from"./Switch-CG8jmhCA.js";import{F as j}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./useFieldComponent-CSNqGKWj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CCPEOAsS.js";import"./useFormReset-neBkOLPK.js";import"./FieldError-BECkkLSz.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),kr={title:"Integrations/React Hook Form/Switch",component:m,render:()=>{const t=async S=>{await c(5e3),b(S)},o=p({defaultValues:{isEnabled:!1}}),F=E();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(f,{children:[r.jsx(F,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsxs(h,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await c(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Switch {...props}>Field1</Switch>
          </Field>
          <Switch>
            Field2
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Switch>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Switch {...props}>Field</Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};

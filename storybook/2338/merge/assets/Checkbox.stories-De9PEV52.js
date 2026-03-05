import{r as j,j as r}from"./iframe-BcqfzoOA.js";import{a as c,u as p,F as a,R as l,S as f,t as b}from"./ResetButton--7CtDtWT.js";import{B as u}from"./Button-C2msjhlA.js";import{S as h}from"./Section-B_QgMIam.js";import{A as x}from"./ActionGroup-Cjv-TUqT.js";import{s as d}from"./ActionBatch-D231mKj-.js";import{C as t}from"./Checkbox-CmrdkA_o.js";import{F as E}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./useFieldComponent-CSNqGKWj.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./useFormValidation-BMgNFXni.js";import"./useToggleState-CCPEOAsS.js";import"./useFormReset-neBkOLPK.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const e=async F=>{await d(1500),y(F)},o=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=b();return r.jsx(a,{form:o,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(x,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},i={render:e=>{const o=p();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await d(2e3),children:r.jsxs(h,{children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:e=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(x,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            <Checkbox {...props}>Accept terms</Checkbox>
          </Field>
          <Checkbox isInvalid>
            Accept terms
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Checkbox>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...m.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Vr as __namedExportsOrder,Gr as default};

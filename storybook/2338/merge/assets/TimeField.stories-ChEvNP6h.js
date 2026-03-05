import{r as b,j as r}from"./iframe-BcqfzoOA.js";import{a,u as p,F as c,R as u,S as f,t as E}from"./ResetButton--7CtDtWT.js";import{L as e}from"./Label-CQjtN3Gn.js";import{B as d}from"./Button-C2msjhlA.js";import{S as h}from"./Section-B_QgMIam.js";import{A as F}from"./ActionGroup-Cjv-TUqT.js";import{s as l}from"./ActionBatch-D231mKj-.js";import{L as S}from"./DateInput-CJ3TBHPi.js";import{T as t}from"./TimeField-C9XRWsFv.js";import{F as y}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./useSpinButton-Cc2xdZDW.js";import"./useFilter-BCT5iaSQ.js";import"./useFieldComponent-CSNqGKWj.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,B=T("submit"),Ur={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const o=async j=>{await l(1500),B(j)},x=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=E();return r.jsx(c,{form:x,onSubmit:o,children:r.jsxs(h,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsxs(F,{children:[r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},i={},m={render:()=>{const o=p();return b.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await l(2e3),children:r.jsxs(h,{children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(e,{children:"Time"}),r.jsx(y,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:()=>{const o=p();return r.jsxs(c,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
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
            <TimeField>
              <Label>Time</Label>
            </TimeField>
          </Field>
          <TimeField isInvalid>
            <Label>Time</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TimeField>
        </Section>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="text">
          <TimeField>
            <Label>Time</Label>
          </TimeField>
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
}`,...s.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Yr as __namedExportsOrder,Ur as default};

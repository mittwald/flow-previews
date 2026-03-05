import{r as E,j as r}from"./iframe-BcqfzoOA.js";import{u as c,F as d,a as h,R as F,S as x,t as y}from"./ResetButton--7CtDtWT.js";import{B as f}from"./Button-C2msjhlA.js";import{S as j}from"./Section-B_QgMIam.js";import{A as S}from"./ActionGroup-Cjv-TUqT.js";import{s as u}from"./ActionBatch-D231mKj-.js";import{A as i}from"./Autocomplete-CuNI1IIx.js";import{L as a}from"./Label-CQjtN3Gn.js";import{T as l}from"./TextField-DLmieK6n.js";import{O as T}from"./Option-BIQFXUFc.js";import{F as A}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./useFieldComponent-CSNqGKWj.js";import"./useFilter-BCT5iaSQ.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./FieldDescription-BAMY7EMv.js";import"./TextField-KO7DCant.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./Popover-lZTmTyt9.js";import"./ListBox-CchDgPOZ.js";import"./DragAndDrop-DlYDxpy9.js";import"./inertValue-CrHbZ2Zz.js";import"./useListState-LsAOIPre.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,w=B("submit"),p=(e="")=>["example.com","test.org","email.net","mail.com"].map(o=>{const t=`${e.split("@")[0]}@${o}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),so={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const e=async g=>{await u(1500),w(g)},o=c({defaultValues:{email:"asd@example.com"}}),t=y(),b=o.watch("email");return r.jsx(d,{form:o,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(b)]})}),r.jsxs(S,{children:[r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},s={},n={render:e=>{const o=c();E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=o.watch("field");return r.jsx(d,{form:o,onSubmit:async()=>await u(2e3),children:r.jsxs(j,{children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...e,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(a,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})})}},m={render:e=>{const o=c(),t=o.watch("field");return r.jsxs(d,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(S,{children:[r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Autocomplete {...props}>
              <TextField>
                <Label>Test</Label>
              </TextField>
              {generateFromString(fieldValue)}
            </Autocomplete>
          </Field>
          <Autocomplete {...props}>
            <TextField isInvalid>
              <Label>Test</Label>
            </TextField>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...m.parameters?.docs?.source}}};const no=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,no as __namedExportsOrder,so as default};

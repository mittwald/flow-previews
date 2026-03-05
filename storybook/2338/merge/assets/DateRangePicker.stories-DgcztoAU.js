import{r as b,j as r}from"./iframe-BcqfzoOA.js";import{a as c,u as d,F as l,R as h,S as F,t as S}from"./ResetButton--7CtDtWT.js";import{L as t}from"./Label-CQjtN3Gn.js";import{B as u}from"./Button-C2msjhlA.js";import{S as x}from"./Section-B_QgMIam.js";import{A as j}from"./ActionGroup-Cjv-TUqT.js";import{s as p}from"./ActionBatch-D231mKj-.js";import{I as f,f as R,K as E}from"./DateInput-CJ3TBHPi.js";import{D as o}from"./DateRangePicker-BGblnF5P.js";import{F as m}from"./FieldDescription-BAMY7EMv.js";import{F as y}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQVZMaTn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./utils-Bwp7PlhH.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CYrr5VC5.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./useSpinButton-Cc2xdZDW.js";import"./useFilter-BCT5iaSQ.js";import"./Popover-lZTmTyt9.js";import"./RangeCalendar-C2ShGKtm.js";import"./useUpdateEffect-Cvezv-ns.js";import"./useFieldComponent-CSNqGKWj.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,P=B("submit"),re={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const e=async D=>{await p(1500),P(D)},g=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=S();return r.jsx(l,{form:g,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:R(E()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(j,{children:[r.jsx(h,{slot:"abort",children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:e,onSubmit:async()=>await p(2e3),children:r.jsxs(x,{children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(y,{children:"ErrorFromOuterFieldError!"})]})]})})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(j,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(h,{slot:"abort",children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
            <DateRangePicker>
              <Label>Future Date</Label>
              <FieldDescription>Select a future date</FieldDescription>
            </DateRangePicker>
          </Field>
          <DateRangePicker isInvalid>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </DateRangePicker>
        </Section>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...a.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ee as __namedExportsOrder,re as default};

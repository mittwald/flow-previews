import{j as r}from"./iframe-4Q3VdU3W.js";import{a as h,u as x,F as j,t as D}from"./Form-D0cPrVSZ.js";import{L as e}from"./Label-UJpqKaML.js";import{B as s}from"./Button-DtfrCWpg.js";import{S}from"./Section-BCaeDUwn.js";import{A as R}from"./ActionGroup-CDfjIgIF.js";import{s as g}from"./Action-BPLFS_xS.js";import{J as a,h as y,L as B}from"./DateField-CDFx-CL9.js";import{D as o}from"./DateRangePicker-BFVRFlCO.js";import{F as P}from"./FieldDescription-DUJAoqDX.js";import"./index-Cun1SEai.js";import"./dynamic-D7Z9JYdX.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./clsx-B-dksMZM.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./browser-BefUj7Q1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./Text-Dj8BftP4.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./getActionGroupSlot-DbevwPeS.js";import"./useStatic-J4yhNwyX.js";import"./context-HST9WQNh.js";import"./Form-CQ3IrCNT.js";import"./Group-CjafXOCg.js";import"./Input-5I3vFHmb.js";import"./useFormValidation-QKBec53c.js";import"./useFormReset-DJaP_Vl0.js";import"./useSpinButton-DpHf6MAv.js";import"./useFilter-j8umfzPe.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-Df0MAnGC.js";import"./useOverlayController-CkYiJEJ3.js";import"./OverlayContextProvider-DGLKtVpY.js";import"./ClearPropsContextView-QV--h8ts.js";import"./RangeCalendar-D5anHk-E.js";import"./Heading-Bob5JKW8.js";import"./useUpdateEffect-CtxBZFEx.js";import"./useMakeFocusable-yVzA5tdL.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Ur=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Ur as __namedExportsOrder,Nr as default};

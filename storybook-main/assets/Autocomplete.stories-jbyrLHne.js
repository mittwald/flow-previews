import{j as r,r as g}from"./iframe-D6IogGzN.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-DlmbUMlC.js";import{B as f}from"./Button-4bsuig8G.js";import{S as E}from"./Section-DSqhsCqF.js";import{A as T}from"./ActionGroup-CyINFblz.js";import{s as u}from"./Action-CdCNq_o6.js";import{A as i}from"./Autocomplete-C-MbUXT2.js";import{L as p}from"./Label-CevfIrA7.js";import{T as l}from"./TextField-BM-HnFwc.js";import{O as B}from"./Option-DEIBTwXB.js";import{F as A}from"./FieldError-s9c2Hgmm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOTSgjbA.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./clsx-B-dksMZM.js";import"./index-D5OmXbhN.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./useRef-DAuBIB6m.js";import"./utils-DGVDGTqS.js";import"./ButtonView-DebfDMTY.js";import"./browser-JB3DJ3rF.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjufwbKz.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OPUq1uX5.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useFocusable-CqeTIxtx.js";import"./ContextMenuSection-DtXi0ARF.js";import"./Dialog-SQEPLKiU.js";import"./RSPContexts-Y8HBeOxz.js";import"./OverlayArrow-AHInXUcQ.js";import"./useControlledState-DoPmGGFu.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./VisuallyHidden-CtfXU_Om.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./useStatic-BI3MLON7.js";import"./context-C3OW4m7r.js";import"./useOverlayController-wzkI43Df.js";import"./useFieldComponent-DWOteHG6.js";import"./useFilter-Bh3-JBZk.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-C7phVJY7.js";import"./FieldDescription-CHk77VTi.js";import"./TextField-ByX6MQQi.js";import"./FieldError-CQOrVEPx.js";import"./Form-DHrkWV8M.js";import"./Group-CgQOg1YP.js";import"./Input-DZPKJfFh.js";import"./useTextField-Dmh39Twp.js";import"./useFormReset-zYUel0fa.js";import"./useFormValidation-CGjfwGDf.js";import"./Popover-Bko44XEP.js";import"./OverlayContextProvider-V3LFD1Iu.js";import"./ListBox-BnMSMlm8.js";import"./DragAndDrop-5YQPfr2l.js";import"./inertValue-B5vTcBxv.js";import"./useListState-Bw9W4n0L.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <Field name={"field"}>
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
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ee as __namedExportsOrder,re as default};

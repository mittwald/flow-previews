import{r as g,j as r}from"./iframe-CwpToEZy.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-BvevyXvN.js";import{B as f}from"./Button-Cw2xgR_6.js";import{S as E}from"./Section-C5Yt0rDG.js";import{A as T}from"./ActionGroup-Cke5umNz.js";import{s as u}from"./ActionBatch-DcvnwnMD.js";import{A as i}from"./Autocomplete-DbIvSQFD.js";import{L as p}from"./Label-BX1OHHkE.js";import{T as l}from"./TextField-AFIxc_v6.js";import{O as B}from"./Option-BpiGPNO-.js";import{F as A}from"./FieldError-P_YSxT2d.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfOleVAa.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./clsx-B-dksMZM.js";import"./index-G1voh-81.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./context-DWVDZDUv.js";import"./ActionGroupView-BEWtiWZf.js";import"./Content-04TsN1VN.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./RSPContexts-DAz7wbZz.js";import"./utils-3nROwXn_.js";import"./Text-DRk3V-Fm.js";import"./browser-DhIaf7O7.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Text-Cb4d8n7F.js";import"./Modal-09gASXkd.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./Overlay-B3hqAdST.js";import"./OverlayContextProvider-CBORYkOm.js";import"./LoadingSpinner-CN3jmE_K.js";import"./IconWarning-BRui_VYo.js";import"./remote-DRomu556.js";import"./Dialog-CQ_DXP4m.js";import"./Button-CuwTmUjn.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kUL6l53_.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useFocusable-ixEZOImu.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";import"./ButtonView-EQ3fadJN.js";import"./Flex-DxGhnD35.js";import"./useRef-Oq-jnguU.js";import"./ContextMenuSection-vq3x4ZL9.js";import"./getActionGroupSlot-DtR43x--.js";import"./useFieldComponent-CneqxYGw.js";import"./useFilter-5IQ9hIvj.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-DFisVnNH.js";import"./FieldDescription-64izSUV5.js";import"./TextField-DdZox5rD.js";import"./FieldError-BoYVEB6S.js";import"./Form-Di0COYqU.js";import"./Group-CMfRs64V.js";import"./Input-Nsfgb7CY.js";import"./useTextField-UBSbKfTG.js";import"./useFormReset-BARG9uBg.js";import"./useFormValidation-pFRcrJM7.js";import"./Popover-BSakkrK3.js";import"./ListBox-CHZyh4hU.js";import"./DragAndDrop-m-SRs0Ep.js";import"./inertValue-DWu22UWT.js";import"./useListState-Lv88ATzW.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ne as __namedExportsOrder,se as default};

import{r as g,j as r}from"./iframe-DFKQ2QsC.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-TRifYodf.js";import{B as f}from"./Button-CumhvKwr.js";import{S as E}from"./Section-B7sZ2fly.js";import{A as T}from"./ActionGroup-SK2hDjUm.js";import{s as u}from"./Action-C10g_G2S.js";import{A as i}from"./Autocomplete-DXUVmE6l.js";import{L as p}from"./Label-DluzxSj2.js";import{T as l}from"./TextField-BfxI7Zdg.js";import{O as B}from"./Option-BwZcIf6y.js";import{F as A}from"./FieldError-DdERfCze.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-8YXtFeDo.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./clsx-B-dksMZM.js";import"./index-BLTW5Tcp.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./context-m8OE0ddO.js";import"./useRef-Bx3esIJs.js";import"./utils-BJXdD5he.js";import"./ButtonView-AQo5jRtJ.js";import"./browser-C3pjfYL0.js";import"./IconWarning-BuA9AHid.js";import"./remote-BP8uJVcU.js";import"./Text-BEPoPMFj.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Text-D27_pVCF.js";import"./LoadingSpinner-DwolGT18.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBkz1b5H.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CE-sEEB4.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useFocusable-C6PlbLtm.js";import"./ContextMenuSection-DFA9uj7i.js";import"./Dialog-BtwdVLzC.js";import"./RSPContexts-ta7dPUPH.js";import"./OverlayArrow-D6jpYtlx.js";import"./useControlledState-DUrZ8j4h.js";import"./Collection-C9L-nPBS.js";import"./CollectionBuilder-DCYsymNm.js";import"./SelectionIndicator-BFMZIIpU.js";import"./Separator-VmOMLBSn.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./useCollator-CO4w-iZj.js";import"./FocusScope-B8-7lMpW.js";import"./VisuallyHidden-CKDTSDk1.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./useStatic-BfD-d5xb.js";import"./context-DCw83PuI.js";import"./useOverlayController-r9uf67Om.js";import"./useFieldComponent-R5E6D8Ic.js";import"./useFilter-q4apYEQE.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BODmqCgi.js";import"./FieldDescription-DOCm5Umg.js";import"./TextField-wg5tZKN2.js";import"./FieldError-Bmf3SAas.js";import"./Form-DKz1zkHn.js";import"./Group-BbkN3tYf.js";import"./Input-9YEFu8mh.js";import"./useTextField-DC60nVA8.js";import"./useFormReset-DwR8gwPw.js";import"./useFormValidation-BX6OQ_jJ.js";import"./Popover-D_QG3gy8.js";import"./OverlayContextProvider-C7UAkNVd.js";import"./ListBox-_lgV1EMv.js";import"./DragAndDrop-BtLIbyrf.js";import"./inertValue-D4DYKbrj.js";import"./useListState-B8PPBloA.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

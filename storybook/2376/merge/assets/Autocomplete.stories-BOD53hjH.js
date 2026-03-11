import{r as g,j as r}from"./iframe-DlWpeVbs.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./FormRootError-DW845PWo.js";import{B as f}from"./Button-OB72uiKS.js";import{S as E}from"./Section-BrxRU1hJ.js";import{A as T}from"./ActionGroup-5C-gGCHv.js";import{s as u}from"./ActionBatch-C-ID7iPf.js";import{A as i}from"./Autocomplete-BRJVFCFK.js";import{L as p}from"./Label-BFCtbPkR.js";import{T as l}from"./TextField-D3Yc5G3Z.js";import{O as B}from"./Option-D23Bd9Te.js";import{F as A}from"./FieldError-wdxD7fJg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3tAnWym.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./clsx-B-dksMZM.js";import"./index-Ci0KQ92C.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./context-w6Z3dllt.js";import"./ActionGroupView-BIh_cM4-.js";import"./Content-opwEsj_c.js";import"./Heading-BJuxWHmq.js";import"./Heading-DCdSeC1b.js";import"./RSPContexts-8MG42HPe.js";import"./utils-BWqiCJWQ.js";import"./Text-BjwiRmws.js";import"./browser-CHTiPLC9.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./Text-BEVTNZ1h.js";import"./Modal-O25jLubx.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./Overlay-DA629dSj.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./LoadingSpinner-C6D9eT_m.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./Dialog-DM93NPwE.js";import"./Button-BH6lR-Fb.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";import"./ButtonView-BEjF0cHe.js";import"./Flex-DFZNaOVm.js";import"./useRef-KpLHRpWI.js";import"./ContextMenuSection-BiNqDgyA.js";import"./getActionGroupSlot-bYWxcQao.js";import"./useFieldComponent-CpDSJ5w8.js";import"./useFilter-CMfrcaBP.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BCwihX90.js";import"./FieldDescription-BCbzcEW9.js";import"./TextField-BweyANNZ.js";import"./FieldError-CO2oyPLw.js";import"./Form-IYTHWqtc.js";import"./Group-BNVpNkm_.js";import"./Input-DN6TuXy8.js";import"./useTextField-Cmu1p6Yf.js";import"./useFormReset-CZgOMFUA.js";import"./useFormValidation-7MNrcMSj.js";import"./Popover-C0He_Yr4.js";import"./ListBox-cxDVBcTT.js";import"./DragAndDrop-C4X7U5yi.js";import"./inertValue-DJBxL1cO.js";import"./useListState-DN9gE7Gx.js";import"./AlertText-Bn9b-fyG.js";import"./AlertIcon-DyJmeCBc.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

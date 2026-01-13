import{j as r,r as g}from"./iframe-y-Qy_Rwm.js";import{u as c,F as d,t as b,b as h}from"./Form-jIrDAmF4.js";import{R as F,S as x}from"./ResetButton-RQpsBGmi.js";import{B as f}from"./Button-BD4RfixQ.js";import{S as E}from"./Section-C7Uhv2VD.js";import{A as T}from"./ActionGroup-BCd-uVcy.js";import{s as u}from"./Action-DCkGWMlj.js";import{A as i}from"./Autocomplete-CwQ1ITPv.js";import{L as p}from"./Label-DwZ1nY2p.js";import{T as l}from"./TextField-k3TCeAKH.js";import{O as B}from"./Option-BS1JhMRC.js";import{F as A}from"./FieldError-CHdxAWDK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOzqWg4O.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./clsx-B-dksMZM.js";import"./index-DHyBIfcz.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./context-ukqkFony.js";import"./browser-BkGSrLgH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-Ek_OXClQ.js";import"./useRef-BbxxB-a-.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./Text-Dc6HCiIC.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./LoadingSpinner-CaEX00sr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CDSdTdYv.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oIpNFQLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ginTfsZX.js";import"./useFocus-L_xbSTvo.js";import"./useFocusRing-TFugmXCf.js";import"./useFocusable-BPLcErJ9.js";import"./ContextMenuSection-UUsl5yAi.js";import"./Dialog-yt0PwtsU.js";import"./RSPContexts-D6kJ8Blw.js";import"./OverlayArrow-BfgbGjhP.js";import"./useControlledState-BivKNDQQ.js";import"./Collection-wMGDOUBU.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./Separator-BVG5NTNP.js";import"./SelectionManager-DlKr1lyz.js";import"./useEvent-D3WWLcmI.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./VisuallyHidden-uuI_aPdk.js";import"./getActionGroupSlot-BtmlVZy9.js";import"./useStatic-6QMcNdFE.js";import"./context-CYZaYtgr.js";import"./useOverlayController-BBvbe3oK.js";import"./useFieldComponent-BPtwnKvp.js";import"./useFilter-geMbY-eF.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-C71d5QJL.js";import"./FieldDescription-CpWKNI_h.js";import"./TextField-CC-2iDxd.js";import"./FieldError-B0Ilb29D.js";import"./Form-DvQjUgdb.js";import"./Group-_NOX1hM3.js";import"./Input-YVfVzY4s.js";import"./useTextField-DGsPnemp.js";import"./useFormReset-DmoJehYX.js";import"./useFormValidation-49dCeNRi.js";import"./useControlledHostValueProps-Br1cey4W.js";import"./Popover-E3KXF6KA.js";import"./OverlayContextProvider-B0VW5X20.js";import"./ListBox-D-M2aLrj.js";import"./DragAndDrop-B__JkqAV.js";import"./inertValue-CfTVZvC0.js";import"./useListState-DejvWxQZ.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,oe as __namedExportsOrder,te as default};

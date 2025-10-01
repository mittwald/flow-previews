import{j as t}from"./iframe-BA6fDn45.js";import{u as h,F as f,t as b,a as O}from"./Form-BwCYqKcw.js";import{B as m}from"./Button-CMSL1MHe.js";import{S as y}from"./Section-BxQ4KpXF.js";import{A}from"./ActionGroup-BWtgkqY9.js";import{s as j}from"./Action-CxZ_aWnU.js";import{A as p}from"./Autocomplete-B9uBGp2U.js";import{L as F}from"./Label-12Swj0ll.js";import{T as B}from"./TextField-BC2tTL-5.js";import{O as n}from"./Option-CVIMFJIP.js";import{S as v}from"./SearchField-CFs60Azc.js";import"./index-Cun1SEai.js";import"./dynamic-B5xcbnuy.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./clsx-B-dksMZM.js";import"./index-DorRoXow.js";import"./FieldError-C4B-9J1n.js";import"./IconWarning-RvG5V2Gg.js";import"./FieldError-DSSHPUap.js";import"./utils-B0PKDg6J.js";import"./Text-BlF9rzJU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./context-D6O0cSe8.js";import"./browser-BAFOwcQV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-BB_jWM0A.js";import"./EmulatedBoldText-Dom6ilWt.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQkI-aJ9.js";import"./useFocus-DSzhmy1b.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./ContextMenuSection-BgHMRQz7.js";import"./Dialog-CYKhgjuk.js";import"./RSPContexts-BrsSHeal.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useControlledState-DgfMlGIn.js";import"./Collection-D4YkJ3N5.js";import"./CollectionBuilder-CyubYm4y.js";import"./context-DwuzVRtg.js";import"./Separator-CFMHi57C.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./useCollator-ynWs3FsB.js";import"./FocusScope-B1mU0Ypz.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./getActionGroupSlot-DOaaGACl.js";import"./useStatic-Dc3NgXvq.js";import"./context-aU6YV9zZ.js";import"./useOverlayController-ni00yHWz.js";import"./ReactAriaControlledValueFix-BuCZ9tyO.js";import"./useFilter-Cm9DM47m.js";import"./TextFieldBase-i1_eh-aT.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Cm7kZs03.js";import"./TextField-DpW3onl2.js";import"./Form-BO5siFlo.js";import"./Group-Bspax4i2.js";import"./Input-DxM6bhLy.js";import"./useTextField-CKMYuI1w.js";import"./useFormReset-DffYIxF4.js";import"./useFormValidation-Da1DrGKi.js";import"./Popover-B2jQdqM2.js";import"./OverlayContextProvider-DpcAFO97.js";import"./ClearPropsContextView-Dalrb-H-.js";import"./DragAndDrop-BTxczxC9.js";import"./inertValue-COzHDkt-.js";import"./useListState-CqDv81Ek.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Autocomplete>
            <SearchField>
              <Label>Test</Label>
            </SearchField>
            <Option value="example.com">example.com</Option>
            <Option value="domain.de">domain.de</Option>
            <Option value="test.org">test.org</Option>
          </Autocomplete>
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
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Zt=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Zt as __namedExportsOrder,Xt as default};

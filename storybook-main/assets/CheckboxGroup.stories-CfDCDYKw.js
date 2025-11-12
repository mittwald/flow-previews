import{j as e,r as v}from"./iframe-DKDdzEg2.js";import{c,u,F as h,t as O}from"./Form-Chvorj6p.js";import{L as i}from"./Label-RGDjpvHy.js";import{R as j,S as f}from"./ResetButton-CxyjnaZ7.js";import{B as x}from"./Button-IIDunxYf.js";import{S as k}from"./Section-BlYXDkFo.js";import{A as C}from"./ActionGroup-DccX8bro.js";import{s as d}from"./Action-Bo6ZQC_V.js";import{q as n,n as r,p as b,F}from"./Modal-CwliNNiJ.js";import"./index-nuYtCEEu.js";import"./dynamic-Bw-gnOjZ.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./clsx-B-dksMZM.js";import"./index-BpsioLCE.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./context-BHOWQ-F6.js";import"./browser-CFpNIPwD.js";import"./utils-glgR2nbC.js";import"./ProgressBar-Wlqbg7O4.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CYZefWcZ.js";import"./Text-CjflxeLx.js";import"./EmulatedBoldText-CD_LMSIk.js";import"./LoadingSpinner-Dty_8Gzu.js";import"./Button-CPtKzFV4.js";import"./useFocusRing-C2RFcQ8k.js";import"./useFocusable-DFxE2EDX.js";import"./Dialog-B3clCL3D.js";import"./RSPContexts-CyAJ8woy.js";import"./OverlayArrow-Dk7sPebR.js";import"./useControlledState-Fctu_HD9.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./getActionGroupSlot-CxXJdk8g.js";import"./useStatic-D7KAuRzE.js";import"./context-CDCUS0mP.js";import"./Popover-FiU_odVZ.js";import"./OverlayTrigger-BFzT5tm9.js";import"./ControlledNotification-A-nlkOWl.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./LayoutCard-BiMl8twz.js";import"./Accordion-B6qbIRBj.js";import"./Alert-BKcRTWJ1.js";import"./AlertIcon-DTKwqTaw.js";import"./AlertBadge-qExA_A1s.js";import"./Align-YF_VCib_.js";import"./TableFooterRow-B5kek3pc.js";import"./SkeletonText-BFsiKAVX.js";import"./Avatar-HfBKa7-S.js";import"./AvatarStack-BAqbTSUA.js";import"./Badge-l5GKE6_A.js";import"./BigNumber-59jK5BSe.js";import"./Breadcrumb-81fsSz21.js";import"./Link-D6MGqqc4.js";import"./Heading-Dg8JptjO.js";import"./Legend-w3fonmao.js";import"./FileCardList-B9Uf0zuc.js";import"./Image-BWRlhe9x.js";import"./CodeBlock-BFll9a2A.js";import"./CopyButton-CpBG4-QY.js";import"./Tooltip-DjRJxdw8.js";import"./react-children-utilities-5wsaFL6D.js";import"./Color-BNN9qFvq.js";import"./Content-C0vcMxy5.js";import"./ContextualHelpTrigger-CVj6wYkq.js";import"./CounterBadge-5IM3_DLn.js";import"./DonutChart-DfsKudDh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cq7vsP2F.js";import"./Header-CycXZnr3.js";import"./Initials-D_TulZuS.js";import"./InlineCode-DJEF18pw.js";import"./LabeledValue-BwyMvv4-.js";import"./PopoverTrigger-C0NOt86m.js";import"./Markdown-DvRsFFz3.js";import"./Separator-DtSoVEwv.js";import"./Message-Dbcl2XRw.js";import"./MessageSeparator-CSbQdfrJ.js";import"./NavigationGroup-CHqgAgY6.js";import"./Notification-BDRnPedH.js";import"./NotificationProvider-CzLfo5F4.js";import"./ProgressBar-k15nJaNS.js";import"./Rating-CaF2rOcE.js";import"./Skeleton-DHQXuh7L.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),sr={title:"Integrations/React Hook Form/CheckboxGroup",component:c,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(m,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(m,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},a={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...p.parameters?.docs?.source}}};const mr=["Default","WithFieldError","WithFocus"];export{l as Default,a as WithFieldError,p as WithFocus,mr as __namedExportsOrder,sr as default};

import{r as s,j as o}from"./iframe-BXGfha1q.js";import{M as n}from"./Modal-BngkIUxs.js";import{B as i}from"./Button-DfmOHFsC.js";import a from"./Default.stories-CSroyQsJ.js";import{C as c}from"./Content-BvqimwwE.js";import{S as d}from"./Section-DH7vXPsV.js";import{T as l}from"./Text-BbFupL_Y.js";import{A as u}from"./ActionGroup-CxRxNddr.js";import{T as x}from"./TextField-CFRr_xny.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-BHfoL7cG.js";import{A as h}from"./ActionBatch-z52bmq8Z.js";import{L as z}from"./Label-DmvSuQEb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-Cx3iunOI.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./Overlay-Bxv8vuKP.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./LoadingSpinner-CnywtlQ4.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./utils-DDzB-hS3.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./context-C9BhwF0E.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./RSPContexts-CG0vEblW.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./Text-B1oZgTuN.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./VisuallyHidden-eEVd_sfi.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./ModalTrigger-CitJvFRj.js";import"./OverlayTrigger-BPtqEArA.js";import"./DialogTriggerView-D7QHHDol.js";import"./lib-CUB2UVrw.js";import"./ResetButton-BJ_wNjWf.js";import"./FieldError-B0wR5GbE.js";import"./FieldError-B-_MD7Je.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";import"./ActionGroupView-B4EOVs6v.js";import"./useRef-DsRyiFKF.js";import"./browser-P6njm6Fr.js";import"./ColumnLayout-Ca_zPp5k.js";import"./AccentBox-C664u3Au.js";import"./Radio-BVCcEFWv.js";import"./useFieldComponent-BBRXs3en.js";import"./useMakeFocusable-CYA8YNba.js";import"./RadioGroup-CgbFsYj7.js";import"./Form-C11JLohN.js";import"./useFormValidation-51U-qV9x.js";import"./useFormReset-9RWtv4Ar.js";import"./RadioButton-BfH_Ipiq.js";import"./DatePicker-CS1Qn6zO.js";import"./DateInput-DmWEdctL.js";import"./Group-C9lE8UeE.js";import"./Input-DlEaT4nu.js";import"./useSpinButton-CWSdPqMD.js";import"./useFilter-CLtB70fk.js";import"./Popover-DUbvu04K.js";import"./RangeCalendar-Co3vR2tD.js";import"./Heading-uLzTRNHK.js";import"./useUpdateEffect-DhfywDl-.js";import"./FieldDescription-B2zafCFx.js";import"./index-CF3PwWyy.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./useControlledHostValueProps-BE7xh8vi.js";import"./TextField-CSKOWfiV.js";import"./useTextField-Cyr4gso_.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./ContextMenuSection-DVxvJxxR.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [size, setSize] = useState<ModalProps["size"]>("s");
    return <Modal {...props} size={size} offCanvas isOpen>
        <Heading>{dummyText.short}</Heading>
        <Content>
          <Section>
            {size === "s" && <Text>{dummyText.long}</Text>}
            {size === "m" && <TextField>
                <Label>{dummyText.short}</Label>
              </TextField>}

            <Button onPress={() => setSize(size === "s" ? "m" : "s")}>
              Change size
            </Button>
          </Section>
        </Content>
        <ActionGroup>
          <Action closeModal>
            <Button color="accent">Create customer</Button>
            <Button variant="soft" color="secondary">
              Abort
            </Button>
          </Action>
        </ActionGroup>
      </Modal>;
  }
}`,...r.parameters?.docs?.source}}};const at=["SizeChange"];export{r as SizeChange,at as __namedExportsOrder,nt as default};

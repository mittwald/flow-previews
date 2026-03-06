import{r as s,j as o}from"./iframe-DBOgS3cI.js";import{M as n}from"./Modal-3YZrkyAE.js";import{B as i}from"./Button-DeSyDtjE.js";import a from"./Default.stories-DP3mMkrR.js";import{C as c}from"./Content-DrBXQyIN.js";import{S as d}from"./Section-B03hcWHL.js";import{T as l}from"./Text-V6WF8rgy.js";import{A as u}from"./ActionGroup-B1DNkudK.js";import{T as x}from"./TextField-BNdWLONv.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{H as f}from"./Heading-BbxqBEBp.js";import{A as h}from"./ActionBatch-C1BOMxBF.js";import{L as z}from"./Label-DEbA9P8V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-Daa1kuSR.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./LoadingSpinner-BMYl670W.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./utils-BhJeINWq.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./context-BFw_9KSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./RSPContexts-Dpo7G8Um.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./Text-TZlAM5yA.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./ModalTrigger-Cyw9N_AB.js";import"./OverlayTrigger-B4nPvJJx.js";import"./DialogTriggerView-D_mi5HIo.js";import"./lib-B5Y3Vwdw.js";import"./ResetButton-BJEIRnrv.js";import"./FieldError-DG3wyRNr.js";import"./FieldError-C8B5aabp.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";import"./ActionGroupView-BQ6DCC5_.js";import"./useRef-CYQsz7t1.js";import"./browser-aVPMedyb.js";import"./ColumnLayout-CKChp-Tq.js";import"./AccentBox-DhyJnH2W.js";import"./Radio-wc4zylga.js";import"./useFieldComponent-pONIfnVv.js";import"./useMakeFocusable-BZKFSyXu.js";import"./RadioGroup-3nktDYjn.js";import"./Form-BBY5sklR.js";import"./useFormValidation-BF3CckmA.js";import"./useFormReset-M_TceD0b.js";import"./RadioButton-AYie4HqQ.js";import"./DatePicker-TfgHi_3_.js";import"./DateInput-BoZl4v7Z.js";import"./Group-DPP3NL9M.js";import"./Input-1Fi11bbE.js";import"./useSpinButton-NtlraZfr.js";import"./useFilter-CISKT1Qd.js";import"./Popover-BfI_0-2O.js";import"./RangeCalendar-BjTw18zp.js";import"./Heading-BTHBDnxA.js";import"./useUpdateEffect-Iz6WveRY.js";import"./FieldDescription-CSCgjXc1.js";import"./index-DdL2yWGd.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./TextField-BdIP0Lrm.js";import"./useTextField-DdxpKlHp.js";import"./Label.module-CUYTf9Jc.js";import"./getActionGroupSlot-BVP40Z09.js";import"./ContextMenuSection-DNl9G5pZ.js";const nt={...a,title:"Overlays/Modal/Edge Cases"},r={render:p=>{const[t,e]=s.useState("s");return o.jsxs(n,{...p,size:t,offCanvas:!0,isDefaultOpen:!0,children:[o.jsx(f,{children:m.short}),o.jsx(c,{children:o.jsxs(d,{children:[t==="s"&&o.jsx(l,{children:m.long}),t==="m"&&o.jsx(x,{children:o.jsx(z,{children:m.short})}),o.jsx(i,{onPress:()=>e(t==="s"?"m":"s"),children:"Change size"})]})}),o.jsx(u,{children:o.jsxs(h,{closeModal:!0,children:[o.jsx(i,{color:"accent",children:"Create customer"}),o.jsx(i,{variant:"soft",color:"secondary",children:"Abort"})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [size, setSize] = useState<ModalProps["size"]>("s");
    return <Modal {...props} size={size} offCanvas isDefaultOpen>
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

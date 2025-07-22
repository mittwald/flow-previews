import{j as r}from"./iframe-B7LyKmrW.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-B2C8hMVq.js";import{L as m}from"./Link-Cxg59stJ.js";import{H as s}from"./HeaderNavigation-B2f8vD46.js";import{B as o}from"./Button-Ds6YhjxA.js";import{T as p}from"./Text-DUoUD__5.js";import{I as C}from"./Image-BTSalH_9.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Shl8SQxl.js";import{a as D,C as y,M as c}from"./ContextMenuContent-Sv_OxQAT.js";import"./ContextMenuSection-DJqVjpwe.js";import{a as A,M as G}from"./Modal-J_wl1MIt.js";import{H as E}from"./Heading-BKIuFTnU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHFGowBc.js";import"./mergeRefs-DMoFTSBP.js";import"./index-DRIChXb_.js";import"./useLocalizedStringFormatter-BSmgV4Fs.js";import"./context-Bp1vmlVu.js";import"./utils-C7pz24DF.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BUy08s3B.js";import"./useFocus-S4LYa827.js";import"./useFocusRing-DxiExAh_.js";import"./useFocusable-UsZUFP92.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-D8va-Paf.js";import"./Button-CnMvl_pE.js";import"./ProgressBar-D1vTXEVZ.js";import"./Label-DSgSzVuQ.js";import"./Hidden-DplB-rWb.js";import"./useLabel-B_uxGEkZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-YA20U_IT.js";import"./EmulatedBoldText-CH7hguL6.js";import"./Text-54Sx_nhu.js";import"./AlertIcon-CnqeNYOC.js";import"./Action-CvLnil_l.js";import"./context-Bn8MzZjp.js";import"./useStatic-ae9ekjn3.js";import"./getActionGroupSlot-HbE0eD39.js";import"./Popover-DmAKuv-J.js";import"./DialogTriggerView-BgzqeZLF.js";import"./Dialog-CbKwT-DG.js";import"./RSPContexts-mttXOxPq.js";import"./OverlayArrow-BOgzAv2q.js";import"./useControlledState-QzhULpBn.js";import"./Collection-BACulWrY.js";import"./CollectionBuilder-1KlzsV_3.js";import"./Separator-CilFnH5A.js";import"./Input-bFGBOkXz.js";import"./SearchField-VyG8Gz3p.js";import"./FieldError-52nE40UF.js";import"./Form-DFMSXVCD.js";import"./Group-BkSjpW6j.js";import"./useTextField-DpE7FPF6.js";import"./useFormReset-Cbj20zLi.js";import"./TextField-x_YXs-HX.js";import"./SelectionManager-CkybOUE-.js";import"./useEvent-BgU4gnPl.js";import"./useCollator-B3crgtAr.js";import"./FocusScope-cqMoFFNL.js";import"./VisuallyHidden-BpBET9_R.js";import"./Switch-BMu1YMmP.js";import"./Label-GaOPpfpv.js";import"./useToggleState-BN7NOtys.js";import"./Overlay-D5gh7GOs.js";import"./Header-BZHtcImv.js";import"./ButtonView-BqN6xTXs.js";import"./Heading-CZiTCk5Q.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};

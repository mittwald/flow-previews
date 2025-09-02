import{j as r}from"./iframe-DaUAgimo.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-Jl_pbRrq.js";import{L as m}from"./Link--At85h3G.js";import{H as s}from"./HeaderNavigation-BF_LPXEB.js";import{B as o}from"./Button-BNJyR7fn.js";import{T as p}from"./Text-DqLl2XlR.js";import{I as C}from"./Image-CC_LKAf0.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DRqRAt1n.js";import{a as y,C as A,M as c}from"./ContextMenuContent-IXUEHRsx.js";import"./ContextMenuSection-BgngavkU.js";import{a as D,M as E}from"./Modal-CarErVwK.js";import{H as G}from"./Heading-CZC9UHM5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./context-DGmQszzG.js";import"./utils-Dv3HAiNW.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BEu6_Qu_.js";import"./useFocus-DfmeJaC9.js";import"./useFocusRing-6fCWhHXp.js";import"./useFocusable-91Y8y3Dw.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-MgjzVDHH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CD_lBn7X.js";import"./ProgressBar-Cs4fjP5n.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./useLabel-4W4rDaLN.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DFc9RAYz.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./Text-DKL0uLiC.js";import"./AlertIcon-CQWaGZWB.js";import"./Action-6Ewb0bna.js";import"./context-C_g0dLJp.js";import"./useStatic-Djoi-J49.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./Popover-C3acxAMq.js";import"./DialogTriggerView-CgOUSRTq.js";import"./Dialog-CaJ4kRlO.js";import"./RSPContexts-GpjylgJ9.js";import"./OverlayArrow-De5g7eHd.js";import"./useControlledState-HXI1EgZM.js";import"./Collection-Cbp4nuPj.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Separator-AEaXKmSc.js";import"./Group-D-iHY_KE.js";import"./SearchField-De9Vc972.js";import"./FieldError-CBWJBmz-.js";import"./Form-StxO2YAG.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./TextField-Cz-3i59y.js";import"./useEvent-dvApoQWz.js";import"./SelectionManager-bQOu0uyJ.js";import"./useCollator-CI-kdhZu.js";import"./FocusScope-Gc7sAVxN.js";import"./VisuallyHidden-BnUSGmEW.js";import"./Switch-CG36W35Q.js";import"./Label-BgV7ip1p.js";import"./useToggleState-D_caSlle.js";import"./Overlay-Zw5HUzRd.js";import"./ButtonView-B6NoEu3U.js";import"./Heading-CBph4xMm.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};

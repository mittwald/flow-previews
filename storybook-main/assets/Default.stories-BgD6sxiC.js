import{j as r}from"./iframe-H6s4LegX.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-BOAgarfH.js";import{L as m}from"./Link-BJVPKwIs.js";import{H as s}from"./HeaderNavigation-CgFhaUqx.js";import{B as o}from"./Button-BfyS9OW4.js";import{T as p}from"./Text-Wzcs2ORX.js";import{I as C}from"./Image-BRuFC_NX.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-7PnM_Pke.js";import{a as y,C as A,M as c}from"./ContextMenuContent-mmqaXj_m.js";import"./ContextMenuSection-BQGVNH_Z.js";import{a as D,M as G}from"./Modal-B2a-n1gO.js";import{H as E}from"./Heading-40nVHR7j.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BSx1Qve-.js";import"./mergeRefs-DP3Z4rVS.js";import"./index-BCzbKcgZ.js";import"./useLocalizedStringFormatter-C86iIvvl.js";import"./context-ByOQKEDv.js";import"./utils-UMD8tMdI.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-B_R4nnaN.js";import"./useFocus-CgMx6KCt.js";import"./useFocusRing-BEqBdngR.js";import"./useFocusable-C_460OjJ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BtBwTXqe.js";import"./Button-D43Lcc_s.js";import"./ProgressBar-D5gyotl2.js";import"./Label-CKpM-ud8.js";import"./Hidden-Di30YZNr.js";import"./useLabel-BPkUN2gP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-N4t9rK0r.js";import"./EmulatedBoldText-CuIAJdmv.js";import"./Text-W_tYTgvJ.js";import"./AlertIcon-CAoFlRiL.js";import"./Action-VE09ntJM.js";import"./context-ByVpJXr1.js";import"./useStatic-DkayqYPl.js";import"./getActionGroupSlot-CgS0DVys.js";import"./Popover-By6BH1UV.js";import"./DialogTriggerView-D6-ZN5ak.js";import"./Dialog-CNl9Rue_.js";import"./RSPContexts-B4jRuJIy.js";import"./OverlayArrow-CJ9pmdXw.js";import"./useControlledState-CVjmrtmN.js";import"./Collection-C7wh_wcR.js";import"./CollectionBuilder-D60ucnzT.js";import"./Separator-BxffjzOt.js";import"./Group-Cl4o1nBF.js";import"./SearchField-DznnLjI8.js";import"./FieldError-Dt9y-hnT.js";import"./Form-DQJn-VxA.js";import"./useTextField-D6v9RXcK.js";import"./useFormReset-iDdXzUQ2.js";import"./TextField-2cDCflSd.js";import"./useEvent-B4EMUzkK.js";import"./SelectionManager-CXLxGtrQ.js";import"./useCollator-5lRk6LtQ.js";import"./FocusScope-BRfTPPDJ.js";import"./VisuallyHidden-BsO4eIaj.js";import"./Switch-1wAjaBl4.js";import"./Label-BPnhZAtM.js";import"./useToggleState-qYn3A5Oh.js";import"./Overlay-UkvfdomO.js";import"./Header-CW54A6j5.js";import"./ButtonView-C42CIbnH.js";import"./Heading-DpGChV-N.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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

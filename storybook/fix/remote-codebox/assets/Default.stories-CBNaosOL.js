import{j as r}from"./iframe-D2buA_qM.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-IOoTZAJG.js";import{L as m}from"./Link-Hn79cV2K.js";import{H as s}from"./HeaderNavigation-B-vqcB29.js";import{B as o}from"./Button-zVUpRv9Z.js";import{T as p}from"./Text-yAGEZlE0.js";import{I as C}from"./Image-BLgokCF3.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CJ-cBAPn.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Bwl4gKA4.js";import"./ContextMenuSection-rnuJ58YB.js";import{a as D,M as G}from"./Modal-RmOWtcl_.js";import{H as E}from"./Heading-CBcxX6lz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NPJkLJf3.js";import"./mergeRefs-DQR1xYYS.js";import"./index-DJwKP2NW.js";import"./useLocalizedStringFormatter-CCkIfvdA.js";import"./context-DqOuYBdO.js";import"./utils-C_LZ7m3D.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BIlt6lCU.js";import"./useFocus-1B3Rl8Uo.js";import"./useFocusRing-k1804b6h.js";import"./useFocusable-B02zeCY6.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-ja7u21Ua.js";import"./Button-U5ni6oS0.js";import"./ProgressBar-zFnSV5yo.js";import"./Label-N33FpYFY.js";import"./Hidden-avqQs3vJ.js";import"./useLabel-CoFh3sW6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CXT6LfEZ.js";import"./EmulatedBoldText-rwysn7dV.js";import"./Text-BCY1tMCR.js";import"./AlertIcon-C-FImwfY.js";import"./Action-DwzQTwOD.js";import"./context-BfKgyIPw.js";import"./useStatic-DUlV9yhw.js";import"./getActionGroupSlot-dS8ZOAQm.js";import"./Popover-Sy3WhCVG.js";import"./DialogTriggerView-DB_1VJf1.js";import"./Dialog-DvjD4YKx.js";import"./RSPContexts-BGMIawCG.js";import"./OverlayArrow-Cjyx3coH.js";import"./useControlledState-DPiym9a8.js";import"./Collection-oIfF5eYU.js";import"./CollectionBuilder-DMu4xOhO.js";import"./Separator-DEURLoXk.js";import"./Group-BFErIHGB.js";import"./SearchField-Zb9DN-44.js";import"./FieldError-B8sT_j_d.js";import"./Form-BNf6kdxI.js";import"./useTextField-e2Nm4Aw4.js";import"./useFormReset-Sc5in8RN.js";import"./TextField-BPJkVYT-.js";import"./useEvent-BqbWpWaQ.js";import"./SelectionManager-CshjmeDO.js";import"./useCollator-ThJgZh_Z.js";import"./FocusScope-D_7nktvV.js";import"./VisuallyHidden-CgNpbGUk.js";import"./Switch-Bf6C6eB0.js";import"./Label-BBxZTNKD.js";import"./useToggleState-DQrdv5cs.js";import"./Overlay-R7d9BbF8.js";import"./Header-D5EWok87.js";import"./ButtonView-BDU-7zRb.js";import"./Heading-BaNmqTkv.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
